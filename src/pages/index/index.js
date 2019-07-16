import './../../components/header/header'
import './../../components/footer/footer'
import './brands/brands'
import './responsive-img/responsive-img'
import './sellout/sellout'

import './index.sass'

import $ from 'jquery';
import 'what-input/dist/what-input.min';
import 'foundation-sites/dist/js/foundation';
import 'foundation-sites/dist/css/foundation.css';


$(document).foundation();
window.jQuery = window.$ = $;


// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

import firebaseConfig from './../../components/sign-in/firebase.config'
// const firebaseConfig = require('./components/page-templates/sign-in/firebase.config');

firebase.initializeApp(firebaseConfig);
