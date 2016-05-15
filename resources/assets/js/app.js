/*
| Strong-Together - A starter project to build a single page Vue.js app based
|                   on Browserify and Semantic-ui with Laravel Spark in mind.
|
|                                             /|
|           _____________                ___/  |          _________
|           \  _____\\\\  \            /  /  __|_____     \  _____ \
|            \ \     \\\\  \          / /           /      \ \    \ \
|             \ \     \\\\  \        //______     /         \ \    \ \
|              \ \     \\\\  \      /  ///|     /            \ \    \ \
|               \ \     \\\\  \    /  ////|   /               \ \    \ \
|                \ \     \\\\  \  /  //// | /                  \ \    \ \
|                 \ \_____\\\\  \/  ////________________________\ \____\ \
|                  \_______\\\\    ////__________________________\ \______\
|                           \\\\  ////                            \ \
|                            \\\\////______________________________\ \
|                             \\\///__________________________________\
|           ____ ___ ____ ____ _  _ ____    ___ ____ ____ ____ ___ _  _ ____ ____
|           [__   |  |__/ |  | |\ | | __     |  |  | | __ |___  |  |__| |___ |__/
|           ___]  |  |  \ |__| | \| |__]     |  |__| |__] |___  |  |  | |___ |  \
|
|
| This project was released under MIT license.
|
| @link      http://websemantics.ca
| @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
| @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
└ */

window.URI = require('urijs')
window._ = require('underscore')
window.moment = require('moment')
window.Promise = require('promise')
window.Cookies = require('js-cookie')
window.Vue = require('vue')
window.$ = window.jQuery = require('jquery')
window.Bragit = require('bragit')

require('bootstrap/dist/js/npm')
require('./components/bootstrap')

var app = new Vue({
  el: 'body',

  /* Application data */
  data: {

  },

  /* Application is ready */
  ready() {
    console.log('All Go ...')
  }

})
