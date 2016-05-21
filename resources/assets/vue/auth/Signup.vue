<template>
  <div class="ui container grid center aligned">
    <div class="eight wide column">
      <h2 class="ui header">
        <div class="content">
          Signup for an account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="fullname" placeholder="Full name">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="mail icon"></i>
              <input type="text" name="email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large submit button">Register</div>
        </div>
      </form>
      <div class="ui message">
        Already a user with us? <a v-link="{ path: '/auth/login' }">Login</a>
      </div>
    </div>
  </div>
</template>
