import * as firebase from "firebase";

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters({
    'login_hint': 'sk8erfirl1007@gmail.com'
});


function googleLogIn () {
    firebase.auth().signInWithPopup(provider).then(function(result) {
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



const googleSignInBtn = document.getElementById('google');

googleSignInBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // print_user(user);
            alert('Hello!');
        } else {
            googleLogIn();
        }
    });
});

