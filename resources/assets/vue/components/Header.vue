<template>
  <!-- Following Menu -->
  <div class="ui large top fixed hidden menu">
    <div class="ui container">
      <a v-for="link in links" class="item" href="{{ link.url}}">
         {{ link.title }}
      </a>
      <div class="right menu">
        <div class="item">
          <a class="ui button" v-link="{ path: '/auth/login' }">Log in</a>
        </div>
        <div class="item">
          <a class="ui primary button" v-link="{ path: '/auth/signup' }">Sign Up</a>
        </div>
      </div>
    </div>
  </div>

  <div class="ui vertical masthead center aligned basic segment">
    <div class="ui container">
      <div class="ui large secondary main menu">
        <a v-for="link in links" class="item" v-link="{ path: link.url }"\>
           {{ link.title }}
        </a>
        <div class="right item">
          <a class="ui button" v-link="{ path: '/auth/login' }">Log in</a>
          <a class="ui primary button" v-link="{ path: '/auth/signup' }">Sign Up</a>
        </div>
      </div>
    </div>
    <div v-if="masthead" class="ui text container">
      <h1 class="ui header title">
        STRONG <img class="logo" src="img/logo.svg"/> TOGETHER
      </h1>
      <div class="p-t-lg p-b-sm">
        <!-- Bragit : http://websemantics.github.io/bragit/ -->
        <a class="ui labeled button github-websemantics-strong-together-stars">
            <div class="ui bragit button"> <i class="star icon"></i> Stars </div>
            <div class="ui basic bragit left pointing label"> <i class="spinner loading icon"></i> </div>
        </a>&nbsp;&nbsp;&nbsp;
        <a class="ui labeled button github-websemantics-strong-together-forks">
            <div class="ui bragit button"> <i class="fork icon"></i> Forks </div>
            <div class="ui basic bragit left pointing label"> <i class="spinner loading icon"></i> </div>
        </a>&nbsp;&nbsp;&nbsp;
        <a class="ui bragit button github-websemantics-strong-together-download"> <i class="download icon"></i> Download </a>&nbsp;&nbsp;&nbsp;
        <a class="ui bragit button github-websemantics-strong-together-github"> <i class="github icon"></i> Github </a>
      </div>
      <h2 class="subtitle">Do whatever you want when you want to.</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: ['masthead'],
  data () {
    return {
      links: [
        {
          title: 'Home',
          url:'/',
          active: true
        },
        {
          title: 'Missing',
          url:'/missing'
        }
      ]
    }
  }
}
</script>
