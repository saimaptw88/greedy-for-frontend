<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- error -->
      <div class="userBtn">
        <div v-if="logedin">
          <v-btn depressed @click="logout">logout</v-btn>
        </div>
        <div v-else>
          <v-btn depressed @click="login">login</v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main class="bk">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-domain',
          title: 'home',
          to: '/',
        },
        {
          icon: 'mdi-domain',
          title: 'my page',
          to: '/mypage',
        },
        {
          icon: 'mdi-domain',
          title: 'goals',
          to: '/wants',
        },
        {
          icon: 'mdi-domain',
          title: 'informations',
          to: '/articles',
        },
        {
          icon: 'mdi-domain',
          title: 'about',
          to: '/about',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'GREEDY',
    }
  },
  computed: {
    logedin() {
      return this.$store.state.user.login
    },
  },
  methods: {
    login() {
      window.location.href = '/users/login'
    },
    logout() {
      this.$store.dispatch('user/logout')
    },
  },
}
</script>
<style lang="scss">
.bk {
  // background-image: url('~static//images/background4greed.jpg');
  // background-size: 100%;
}
</style>
