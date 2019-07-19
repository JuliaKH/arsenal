import * as firebase from "firebase";
import '../variables'
import { signInForm } from '../sign-in-view'
import { googleSignOutBtn } from '../../sign-out/googlesign-out'
import { signInDom } from "../variables";

const provider = new firebase.auth.GoogleAuthProvider();

import { SignInObservable } from './Observable'
import { Observer } from './Observer'

const signInButton = signInDom.openSignInFormButton,
      googleSignInBtn = document.getElementById('google-sign-in');


let addImage = (user) => {
    document.querySelector('.avatar').src = user.photoURL;
};
let closeForm = () => {
    signInForm.close();
};
const UserSignInObservable = new SignInObservable(),
      // googleSignInObserver = new Observer(UserSignInObservable),
      signInFormCloseObserver = new Observer(closeForm),
      setPhotoObserver = new Observer(addImage);
      // alertUserNameObserver = new Observer(alertUserNameObserver);

let googleSignIn  = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;

        signInButton.classList.remove('active');
        googleSignOutBtn.classList.add('active');
        UserSignInObservable.notifyObservers(user);})
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};

UserSignInObservable.subscribe(signInFormCloseObserver);

UserSignInObservable.subscribe(setPhotoObserver);

googleSignInBtn.addEventListener('click', () => {
    googleSignIn();
});


window.addEventListener('load', function () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            googleSignOutBtn.classList.add('active');
            const displayName = user.displayName;
            const photoURL = user.photoURL;
            document.querySelector('.avatar').src = photoURL;
        }
        else{
            signInButton.classList.add('active');
            document.querySelector('.avatar').src = 'assets/img/header/avatar-plaseholder.png';
        }
    });
});

export {signInButton, signInFormCloseObserver, setPhotoObserver};
