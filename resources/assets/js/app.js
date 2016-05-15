/*
| Vue-Spark - A starter project to build a single page Vue.js app based
|             on Browserify and Semantic-ui with Laravel Spark in mind.
|  _________  __   __
|  \  _____ \ \ \ / _  _ ___
|   \ \    \ \ \ V | || / -_)  __  __    ________
|    \ \    \ \ \_/ \_,_\___|  \_\ \_\   \  ____ \
|     \ \    \ \    ___               _   \ \   \ \
|      \ \    \ \  / __|_ __ __ _ _ _| |_  \ \   \ \
|       \ \    \ \ \__ | '_ / _` | '_| / /  \ \   \ \
|        \ \    \ \ \__| .__\__,_|_| |_\_\   \ \   \ \
|         \ \____\ \___| |____________________\ \___\ \
|          \______\ \--------------------------\ \_____\
|                  \ \__________________________\ \
|                   \______________________________\
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

  /* The application's data */
  data: {

  },

  /*  The component has been created by Vue.js */
  created() {},

  /* Prepare the application */
  ready() {
    console.log('Application Ready.')

    this.whenReady()
  },

  methods: {
    /* Finish bootstrapping the application */
    whenReady() {}

  }

})
