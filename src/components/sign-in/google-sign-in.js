import * as firebase from "firebase";

// import {closeFormElement} from '../sign-in/sign-in-view'
import {googleSignOutBtn} from '../sign-out/googlesign-out'
export {signInButton};

const provider = new firebase.auth.GoogleAuthProvider(),
      signInButton = document.querySelector(".authorization-button"),
      googleSignInBtn = document.getElementById('google-sign-in');

function googleSignIn () {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // signInForm.closeFormElement();
        signInButton.classList.remove('active');
        googleSignOutBtn.classList.add('active');
        let photoURL = user.photoURL;
        // document.querySelector('.avatar').src = photoURL;
    }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
    });

}

window.addEventListener('load', function () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // alert('Hello');
            googleSignOutBtn.classList.add('active');
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            // document.querySelector('.avatar').src = photoURL;

            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            alert(`Hello! ${displayName}`);
        }
        else{
            signInButton.classList.add('active');
            document.querySelector('.avatar').src = 'assets/img/header/avatar-plaseholder.png';
        }
    });
});

googleSignInBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // print_user(user);

        } else {
            googleSignIn();
        }
    });
});



