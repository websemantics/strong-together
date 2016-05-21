/*
| Strong-Together - A starter project to build single page Vue.js apps as
|                   stand-alone or for Laravel / Laravel Spark projects
|                   based on Browserify and Semantic-ui.
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Bragit from 'bragit'
import App from './../vue/App.vue'
import { configRouter } from './routes'

Vue.component('header-component', require('./../vue/components/Header.vue'))
Vue.component('footer-component', require('./../vue/components/Footer.vue'))

Vue.use(VueRouter)

var router = new VueRouter({
  saveScrollPosition: true
})

window.Bragit = Bragit;
configRouter(router)

router.start(App, '#app')
