import './components/page-templates/header/header'
import './components/page-templates/footer/footer'
import  './components/pages/main/main'

import './index.sass'

import $ from 'jquery';
import 'what-input/dist/what-input.min';
import 'foundation-sites/dist/js/foundation';
import 'foundation-sites/dist/css/foundation.css';


$(document).foundation();


// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');


import firebaseConfig from './components/page-templates/sign-in/firebase.config'
// const firebaseConfig = require('./components/page-templates/sign-in/firebase.config');

firebase.initializeApp(firebaseConfig);
