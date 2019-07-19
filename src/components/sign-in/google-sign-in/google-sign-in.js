import * as firebase from "firebase";
import '../variables'
import { signInForm } from '../sign-in-view'
import { googleSignOutBtn } from '../../sign-out/googlesign-out'
import { signInDom } from "../variables";

const provider = new firebase.auth.GoogleAuthProvider();

import { Observable } from './Observable'
import { Observer } from './Observer'

const signInButton = signInDom.openSignInFormButton,
      googleSignInBtn = document.getElementById('google-sign-in');


const UserSignInObservable = new Observable(),
      googleSignInObserver = new Observer(UserSignInObservable),
      signInFormCloseObserver = new Observer(UserSignInObservable),
      setPhotoObserver = new Observer(UserSignInObservable),
      alertUserNameObserver = new Observer(UserSignInObservable);

let addImage = (user) => {
    document.querySelector('.avatar').src = user.photoURL;
};
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

signInFormCloseObserver.subscribe(() =>
    signInForm.close()
);

setPhotoObserver.subscribe(user => {
    addImage(user);
});

alertUserNameObserver.subscribe(user => {
   alert(`Hello ${user.displayName}!`)
});

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

export {signInButton};
