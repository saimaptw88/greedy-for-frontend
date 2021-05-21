<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">login</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="user.email" label="email" />
          <v-text-field v-model="user.password" label="password" />
          <v-card-actions>
            <v-btn
              color="#36dbde"
              class="white--text"
              width="100px"
              @click="loginWithAuthModule"
            >
              login
            </v-btn>
            <v-btn
              class="white--text"
              color="#777676"
              width="100px"
              @mouseover="changeColor"
              @click="redirectSignup"
            >
              sign up
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: ['after_auth'],
  name: 'App',
  auth: false,
  data() {
    return {
      user: {
        password: '',
        email: '',
      },
    }
  },
  methods: {
    // loginメソッドの呼び出し
    async loginWithAuthModule() {
      await this.$store.dispatch('user/login', this.user)
    },
    redirectSignup() {
      window.location.href = '/users/signup'
    },
    changeColor() {},
  },
}
</script>
