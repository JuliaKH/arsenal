import './sign-out.sass';

import * as firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'login_hint': 'sk8ergirl1007@gmail.com'
});


const googleSignOutBtn = document.getElementById('google-sign-out');

export {googleSignOutBtn};

googleSignOutBtn.addEventListener('click', ()=> {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert('Successful!');
        // googleSignOutBtn.classList.remove('is-active');
        googleSignOutBtn.classList.add('none-active');
    }).catch(function(error) {
        // An error happened.
    });

});

