<template>
    <div class="pusher">
      <header-component></header-component>
      <div class="ui page grid basic segment">
        <div class="sixteen wide column">
          <h2 class="ui center aligned icon header">
            <i class="circular warning icon"></i>
            404 ERROR
          </h2>
          <div class="ui container center aligned">
            Oh dear, the page you requested is nowhere to be found!
            Go back to the <a v-link="{ path: '/' }">Home Page</a> or just chill here for a bit.
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
</template>
