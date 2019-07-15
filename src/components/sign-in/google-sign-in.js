import * as firebase from "firebase";
import './variables'
var provider = new firebase.auth.GoogleAuthProvider();


// provider.setCustomParameters({
//     'login_hint': 'sk8ergirl1007@gmail.com'
// });

// import {closeFormElement} from '../sign-in/sign-in-view'
import {signInForm} from  '../sign-in/sign-in-view';
import {googleSignOutBtn} from '../sign-out/googlesign-out'
import {signInDom} from "./variables";
const signInButton = signInDom.openSignInFormButton;
export {signInButton};

function googleSignIn () {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // signInForm.closeFormElement();
        signInButton.classList.remove('active');
        googleSignOutBtn.classList.add('active');
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
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
            document.querySelector('.avatar').src = photoURL;

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

const googleSignInBtn = document.getElementById('google-sign-in');

googleSignInBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // print_user(user);

        } else {
            googleSignIn();
        }
    });
});



