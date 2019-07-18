import * as firebase from "firebase";
import { signInDom } from "../variables";
import { signInForm } from "../sign-in-view";
import { googleSignOutBtn } from "../../sign-out/googlesign-out";

import { Observable } from "./Observable";
import { Observer } from "./Observer";

const signInButton = signInDom.openSignInFormButton;
const googleSignInBtn = document.getElementById("google-sign-in");

const observable = new Observable();
const googleSignInObserver = new Observer(observable);
const signInFormCloseObserver = new Observer(observable);
const setPhotoObserver = new Observer(observable);
const alertUserNameObserver = new Observer(observable);

googleSignInObserver.subscribe(user => {
  observable.googleSignIn();
});

signInFormCloseObserver.subscribe(user => {
  signInForm.close();
});

setPhotoObserver.subscribe(user => {
  document.querySelector(".avatar").src = user.photoURL;
});
alertUserNameObserver.subscribe(user => {
  alert(`Hello! ${user.displayName}`);
});

googleSignInBtn.addEventListener("click", () => {
  firebase.auth().onAuthStateChanged(user => {
    observable.notifyObservers(user);
  });
});

window.addEventListener("load", () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      googleSignOutBtn.classList.add("active");
      const { displayName } = user;
      const { photoURL } = user;
      document.querySelector(".avatar").src = photoURL;
    } else {
      signInButton.classList.add("active");
      document.querySelector(".avatar").src =
        "assets/img/header/avatar-plaseholder.png";
    }
  });
});

export { signInButton };
