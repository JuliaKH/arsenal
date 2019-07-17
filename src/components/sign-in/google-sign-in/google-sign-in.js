import * as firebase from "firebase";
import '../variables'
import {signInForm} from '../sign-in-view'
import {googleSignOutBtn} from '../../sign-out/googlesign-out'
import {signInDom} from "../variables";

import {Observable} from './Observable'
import {Observer} from './Observer'

const signInButton = signInDom.openSignInFormButton,
      googleSignInBtn = document.getElementById('google-sign-in');


const observable = new Observable(),
      googleSignInObserver = new Observer(observable),
      signInFormCloseObserver = new Observer(observable),
      setPhotoObserver = new Observer(observable),
      alertUserNameObserver = new Observer(observable);

googleSignInObserver.subscribe(user => {
    observable.googleSignIn();
});

signInFormCloseObserver.subscribe(user => {
    signInForm.close();
});

setPhotoObserver.subscribe(user => {
    document.querySelector('.avatar').src = user.photoURL;
});
alertUserNameObserver.subscribe(user => {
    alert(`Hello! ${user.displayName}`);
});

googleSignInBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        observable.notifyObservers(user);
    })

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
