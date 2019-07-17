import './../../components/header/header'
import './../../components/footer/footer'
import './brands/brands'
import './responsive-img/responsive-img'
import './sellout/sellout'
import './lazy_loading'

import './index.sass'

import $ from 'jquery';
import 'what-input/dist/what-input.min';
import 'foundation-sites/dist/js/foundation';
import 'foundation-sites/dist/css/foundation.css';


$(document).foundation();
window.jQuery = window.$ = $;


import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

// console.log('fire', firebase);

import firebaseConfig from './../../components/sign-in/firebase.config'

firebase.initializeApp(firebaseConfig);
