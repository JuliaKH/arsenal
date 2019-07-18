import * as firebase from "firebase";
// firebase.initializeApp(firebaseConfig);

import firebaseConfig from "./firebase.config";
import { signInButton } from "./google-sign-in/google-sign-in";

const facebookSignInBtn = document.getElementById("facebook-sign-in");
const facebookSignOutBtn = document.getElementById("facebook-sign-out");

const provider = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
  firebase
    .auth()
    .signInWithPopup(provider)

    .then(result => {
      const token = result.credential.accessToken;
      const { user } = result;

      console.log(token);
      console.log(user);
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
}

function facebookSignout() {
  firebase
    .auth()
    .signOut()

    .then(
      () => {
        console.log("Signout successful!");
      },
      error => {
        console.log("Signout failed");
      }
    );
}

facebookSignInBtn.addEventListener("click", () => {
  if (facebookSignin()) {
    // closeFormElement();
    facebookSignOutBtn.classList.add("active");
    if (facebookSignOutBtn.classList.contains("active")) {
      signInButton.classList.remove("active");
    }
  }
});
facebookSignOutBtn.addEventListener("click", () => {
  facebookSignout();
  facebookSignOutBtn.classList.remove("active");
  signInButton.classList.add("active");
});
