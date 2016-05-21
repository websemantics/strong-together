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
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

>  A starter project to build a single page [Vue.js](https://vuejs.org) app based on [Browserify](http://browserify.org/)
and [Semantic-ui](http://semantic-ui.com/) with [Laravel Spark](https://spark.laravel.com) in mind.

## Install

Install all Node.js packages, and configure `Semantic-Ui` for the project.

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

## Deploy

This command will deploy this project to gh-pages if `.travis.yml` is setup.

``` bash
# ship to gh-pages
npm run deploy
```

## Change Theme

To change current Semantic-ui theme edit `resources/assets/less/semantic/theme.config` and modify per component.

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

The above example changes the theme for the `button` and `input` elements to the predefined `github` theme.

## Credits
This project was inspired by [Browserify Vue-cli Template](https://github.com/vuejs-templates/browserify) and [Vue.js Starter Website](https://github.com/layer7be/vue-starter)
