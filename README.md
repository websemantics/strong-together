```                 
                                .   
                                  `:.          ':.
                                    `:.         ':.
                                     ,::         ::
                                     ;:'          :
                             .:'    ;:'            '               
                            .:'    :'        /|     
           _____________    ::    /     ___/  |     
           \  _____\\\\  \   :        /  /  __|_____
            \ \     \\\\  \   `      / /           /
             \ \     \\\\  \        //______     /  
              \ \     \\\\  \      /  ///|     /       _________
               \ \     \\\\  \    /  ////|   /         \  _____ \
                \ \     \\\\  \  /  //// | /            \ \    \ \
                 \ \_____\\\\  \/  ////__________________\ \____\ \     
                  \_______\\\\    ////____________________\ \______\      
                           \\\\  ////                      \ \
                            \\\\////________________________\ \
                             \\\///____________________________\
           ____ ___ ____ ____ _  _ ____    ___ ____ ____ ____ ___ _  _ ____ ____
           [__   |  |__/ |  | |\ | | __     |  |  | | __ |___  |  |__| |___ |__/
           ___]  |  |  \ |__| | \| |__]     |  |__| |__] |___  |  |  | |___ |  \
```
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Build Status](https://travis-ci.org/websemantics/strong-together.svg?branch=master)](https://travis-ci.org/websemantics/strong-together)


>  A starter project to build single page [Vue.js](https://vuejs.org) apps as stand-alone or for [Laravel](https://laravel.com) / [Laravel Spark](https://spark.laravel.com) projects; based on [Browserify](http://browserify.org/)
and [Semantic-ui](http://semantic-ui.com/).

### [Demo](http://websemantics.github.io/strong-together)&nbsp;&nbsp;&nbsp;[Submit Issue](https://github.com/websemantics/strong-together/issues)


## Install

Clone this repo and install all Node.js packages, and configure Semantic-ui for the project.

``` bash
# install dependencies
npm install
```


## Build

The build process will populate the `public` folder with javascript and css files.

``` bash
# compile resources
npm run build
```

## Development

To support development run `watch` script to build when changes are made inside `resources` folder.

``` bash
# compile resources when changes made
npm run watch
```

## Deploy

This command will deploy this project to gh-pages if `.travis.yml` is setup.

``` bash
# ship to gh-pages
npm run deploy
```


## Semantic-ui

This project has been setup to work with [Semantic-ui](http://semantic-ui.com) out-of-the-box. All the files required to modify the framework styles are located at `resources/assets/less/semantic` folder.


#### Change Theme

To change current Semantic-ui theme edit `resources/assets/less/semantic/theme.config` and modify per element.

Example,

```js
/* Elements */
@button     : 'github';
@container  : 'default';
@divider    : 'default';
@flag       : 'default';
@header     : 'default';
@icon       : 'default';
@image      : 'default';
@input      : 'github';
```

The above example changes the theme for the `button` and `input` elements from `default` to the `github` theme. Run `gulp` to build the project and view the changes.


#### Override Styles

To override the default Semantic-ui styles, find the target elements files here,  `resources/assets/less/semantic/site`.

There are two files to control any Semantic-ui element styles for the currently selected theme ('default', 'github' etc). For `Button` element, we can either override the element `less` variables,

```
strong-together/resources/assets/less/semantic/site/elements/button.variables
```

Or the element styles directly,

```
strong-together/resources/assets/less/semantic/site/elements/button.overrides
```
## Screenshot

[![image](https://raw.githubusercontent.com/websemantics/strong-together/gh-pages/img/screenshot.png)](http://websemantics.github.io/strong-together)


## Credits
This project was inspired by aspects of [Browserify Vue-cli Template](https://github.com/vuejs-templates/browserify) and [Vue.js Starter Website](https://github.com/layer7be/vue-starter).
