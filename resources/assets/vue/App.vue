<template>
  <router-view></router-view>
</template>
<script>
export default {
  ready() {

    /* Init Semantic-ui */
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in')
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out')
        }
      })
  }
}
</script>
