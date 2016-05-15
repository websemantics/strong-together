var elixir = require('laravel-elixir')
    elixir.config.sourcemaps = false;

elixir(function (mix) {
  mix.less('app.less')
    .browserify('app.js')
    .copy('resources/assets/views/index.html', 'public/index.html')
    .copy('resources/assets/img', 'public/img')
    .copy('resources/assets/fonts', 'public/fonts/roboto')
    .styles(['resources/assets/css/**/*.css'], 'public/css/vendors.css', './')
})
