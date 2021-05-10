<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div v-if="logedin">
        <v-list>
          <v-list-item
            v-for="(item, i) in logedinItems"
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
          <v-btn @click="reset">reset</v-btn>
        </v-list>
      </div>
      <div v-else>
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
      </div>
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
          title: 'informations',
          to: '/informations',
        },
        {
          icon: 'mdi-domain',
          title: 'about',
          to: '/about',
        },
      ],
      logedinItems: [
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
          title: 'daily message',
          to: '/daily/message',
        },
        {
          icon: 'mdi-domain',
          title: 'informations',
          to: '/informations',
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
      title: 'Amaimon',
    }
  },
  computed: {
    logedin() {
      return this.$store.state.user.login
    },
    headers() {
      return this.$store.state.user.headers
    },
  },
  methods: {
    login() {
      window.location.href = '/users/login'
    },
    logout() {
      const headers = this.$store.getters['user/headers']
      const login = this.$store.getters['user/login']
      console.log(headers)
      console.log(login)
      // this.$store.dispatch('user/logout')
      if (headers === '' && login) {
        this.$store.state.user.login = false
      } else {
        this.$store.dispatch('user/logout')
      }
    },
    reset() {
      this.$store.dispatch('user/reset')
    },
  },
}
</script>
