import $ from "jquery";
import "what-input/dist/what-input.min";
import "foundation-sites/dist/js/foundation";
import "foundation-sites/dist/css/foundation.css";

import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

// console.log('fire', firebase);

import firebaseConfig from "../../components/sign-in/firebase.config";

$(document).foundation();
window.jQuery = window.$ = $;

firebase.initializeApp(firebaseConfig);
