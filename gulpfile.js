var elixir = require('laravel-elixir')
    elixir.config.sourcemaps = false;

elixir(function (mix) {
  mix.scripts([
    "../../../node_modules/jquery/dist/jquery.js",
    "../../../node_modules/semantic-ui-less/definitions/behaviors/visibility.js",
    "../../../node_modules/semantic-ui-less/definitions/modules/sidebar.js",
    "../../../node_modules/semantic-ui-less/definitions/modules/transition.js"
  ])
  .less('app.less')
  .browserify('app.js')
  .copy('resources/assets/views/index.html', 'public/index.html')
  .copy('resources/assets/img', 'public/img')
  .copy('resources/assets/fonts', 'public/fonts/roboto')
  .copy('node_modules/semantic-ui-less/themes/default/assets/fonts', 'public/fonts/semantic')
  .styles(['resources/assets/css/**/*.css'], 'public/css/vendors.css', './')
})
