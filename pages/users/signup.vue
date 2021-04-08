<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5" color="gray">
      <v-card-title>
        <h1 class="display-1">sign up</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field solo v-model="user.email" label="email" />
          <v-text-field solo v-model="user.password" label="password" />
          <v-text-field
            solo
            v-model="user.password_confirmation"
            label="check password"
          />
          <v-card-actions>
            <v-btn color="primary" class="white--text" @click="registerUser">
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
  name: 'App',
  auth: false,
  data() {
    return {
      user: {
        password: '',
        email: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    registerUser() {
      this.$store.dispatch('user/signup', this.user)
    },
  },
}
</script>
