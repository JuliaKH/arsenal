import './sign-out.sass';

import * as firebase from "firebase";
import {signInButton} from '../sign-in/google-sign-in';
var provider = new firebase.auth.GoogleAuthProvider();

const googleSignOutBtn = document.getElementById('google-sign-out');

export {googleSignOutBtn};

googleSignOutBtn.addEventListener('click', ()=> {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert('Successful!');
        // googleSignOutBtn.classList.remove('is-active');
        googleSignOutBtn.classList.remove('active');
        signInButton.classList.add('active');
    }).catch(function(error) {
        // An error happened.
    });

});

