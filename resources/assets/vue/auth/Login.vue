<template>
  <div class="ui container grid center aligned">
    <div class="eight wide column">
      <h2 class="ui header">
        <div class="content">
          Log-in to your account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large submit button">Login</div>
        </div>
      </form>
      <div class="ui message">
        New to us? <a v-link="{ path: '/auth/signup' }">Sign Up</a>
      </div>
    </div>
  </div>
</template>
