import "./sign-out.sass";

import * as firebase from "firebase";
import { signInButton } from "../sign-in/google-sign-in/google-sign-in";

const provider = new firebase.auth.GoogleAuthProvider();

const googleSignOutBtn = document.getElementById("google-sign-out");

export { googleSignOutBtn };

googleSignOutBtn.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      alert("Successful!");
      googleSignOutBtn.classList.remove("active");
      signInButton.classList.add("active");
    })
    .catch(error => {
      // An error happened.
    });
});
