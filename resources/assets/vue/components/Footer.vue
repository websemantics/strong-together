<template>
  <div class="ui vertical footer basic segment">
    <div class="ui container">
      <div class="ui stackable equal height stackable grid">
        <div class="twelve wide column">
          Built with <i class="red heart icon"></i> by {{ company }}.
        </div>
        <div class="four wide column">
          <a v-for="site in social" class="ui icon button" href="{{ site.url}}">
             <i class="{{ site.icon }} icon"></i>
         </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      company: 'Your company.',
      social: {
        facebook: {
          url: 'http://facebook.com',
          icon: 'facebook'
        },twitter: {
          url: 'http://twitter.com',
          icon: 'twitter'
        },github: {
          url: 'http://github.com',
          icon: 'github'
        }
      }
    }
  }
}
</script>
