import './components/page-templates/header/header'

import './index.sass'

import $ from 'jquery';
import 'what-input/dist/what-input.min';
import 'foundation-sites/dist/js/foundation';
import 'foundation-sites/dist/css/foundation.css';
import './firebase-config'

var firebase = require('firebase/app');

require('firebase/auth');
require('firebase/database');
require('firebase/storage');
$(document).foundation();