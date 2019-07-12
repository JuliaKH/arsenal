import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

import firebaseConfig from "./firebase.config";

var Facebookprovider = new firebase.auth.FacebookAuthProvider();

firebase.auth().signInWithPopup(Facebookprovider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
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

function facebookSignIn () {
    firebase.auth().signInWithPopup(Facebookprovider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
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

const facebookSignInBtn = document.getElementById('facebook-sign-in');
// const googleSignOutBtn = document.getElementById('google-sign-out');

facebookSignInBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // print_user(user);
            var displayName = user.displayName;
            // var email = user.email;
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;

            alert(`Hello! ${displayName}`);
            facebookSignInBtn.classList.add('is-active');
            facebookSignInBtn.classList.remove('none-active');

        } else {
            facebookSignIn();
            facebookSignInBtn.classList.add('none-active');
        }
    });
});
