import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

import firebaseConfig from "./firebase.config";
import {signInButton} from "./google-sign-in";
// import {closeFormElement} from "./sign-in-view";

const facebookSignInBtn = document.getElementById('facebook-sign-in'),
      facebookSignOutBtn = document.getElementById('facebook-sign-out');

const provider = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
    firebase.auth().signInWithPopup(provider)

        .then(function(result) {
            let token = result.credential.accessToken;
            let user = result.user;

            console.log(token);
            console.log(user);
        }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
    });
}

function facebookSignout() {
    firebase.auth().signOut()

        .then(function() {
            console.log('Signout successful!')
        }, function(error) {
            console.log('Signout failed')
        });
}


facebookSignInBtn.addEventListener('click', () => {
    facebookSignin();
    // closeFormElement();
    facebookSignOutBtn.classList.add('active');
    if(facebookSignOutBtn.classList.contains('active'))
        signInButton.classList.remove('active');
});
facebookSignOutBtn.addEventListener('click', () => {
    facebookSignout();
    facebookSignOutBtn.classList.remove('active');
    signInButton.classList.add('active');
});