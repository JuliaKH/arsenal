import * as firebase from "firebase";
import {googleSignOutBtn} from "../../sign-out/googlesign-out";
import {signInButton} from "./google-sign-in";

const provider = new firebase.auth.GoogleAuthProvider();

class Observable {
    constructor() {
        this.observers = [];
    }
    googleSignIn() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            signInButton.classList.remove('active');
            googleSignOutBtn.classList.add('active')})
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
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

export {Observable}
