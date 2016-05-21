module.exports = {
  configRouter: function (router) {
    router.map({
      'auth': {
        component: require('./../vue/Auth.vue'),
        subRoutes: {
          '/login': {
            component: require('./../vue/auth/Login.vue')
          },
          '/signup': {
            component: require('./../vue/auth/Signup.vue')
          }
        }
      },
      '/': {
        component: require('./../vue/Home.vue'),
      },
      '*': {
        component: require('./../vue/404.vue')
      }
    })
  }
}
