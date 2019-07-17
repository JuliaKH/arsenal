import * as firebase from "firebase";
import './variables'
var provider = new firebase.auth.GoogleAuthProvider();

import {signInForm} from './sign-in-view'
import {googleSignOutBtn} from '../sign-out/googlesign-out'
import {signInDom} from "./variables";
const signInButton = signInDom.openSignInFormButton;
const googleSignInBtn = document.getElementById('google-sign-in');
export {signInButton};

class EventObserver {
    constructor () {
        this.observers = []
    }

    subscribe (fn) {
        this.observers.push(fn)
    }
    unsubscribe (fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    broadcast (data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}
const authObserver = new EventObserver();

authObserver.subscribe(text => {
    console.log('broadcast catched', text);
    googleSignIn()
});

googleSignInBtn.addEventListener('click', () => {
    authObserver.broadcast()
});


function googleSignIn () {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // signInForm.closeFormElement();
        signInButton.classList.remove('active');
        googleSignOutBtn.classList.add('active');
    }).then(
        signInForm.close()
    ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

}
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

// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {
//     // print_user(user);
//     googleSignOutBtn.classList.add('active');
//     const displayName = user.displayName;
//     const photoURL = user.photoURL;
//     document.querySelector('.avatar').src = photoURL;
//     alert(`Hello! ${displayName}`);
//
// } else {
//     googleSignIn();
//     // signInForm.close();
// }
// }))
