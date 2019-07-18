import * as firebase from "firebase";
import { googleSignOutBtn } from "../../sign-out/googlesign-out";
import { signInButton } from "./google-sign-in";

const provider = new firebase.auth.GoogleAuthProvider();

class Observable {
  constructor() {
    this.observers = [];
  }

  googleSignIn() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const { user } = result;
        signInButton.classList.remove("active");
        googleSignOutBtn.classList.add("active");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  unregisterObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.notify(data));
  }
}

export { Observable };
