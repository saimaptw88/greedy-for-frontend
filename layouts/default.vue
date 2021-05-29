<template>
  <v-app dark class="bk">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      color="#00b5b2"
      dark
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="app-bar"
      dark
      color="#00c6c6"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text" @click="goHome" v-text="title" />
      <v-spacer />
      <!-- error -->
      <div class="userBtn">
        <div v-if="logedin">
          <v-btn
            depressed
            @click="logout"
            class="white--text"
            id="logout"
            color="#00c6c6"
            >logout</v-btn
          >
        </div>
        <div v-else>
          <v-btn
            depressed
            @click="login"
            class="white--text"
            id="login"
            color="#00c6c6"
            >login</v-btn
          >
        </div>
      </div>
    </v-app-bar>
    <v-main class="bk">
      <v-container class="bk">
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
          title: 'infomations',
          to: '/infomations',
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
          title: 'find my goal',
          to: '/wants',
        },
        {
          icon: 'mdi-domain',
          title: 'daily message',
          to: '/daily/message',
        },
        {
          icon: 'mdi-domain',
          title: 'infomations',
          to: '/infomations',
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
      title: 'My Desire For Engineers β',
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
    goHome() {
      window.location.href = '/'
    },
  },
}
</script>
<style lang="scss">
.bk {
  background-color: #abdcd9;
}
.app-bar {
  color: '00d8db';
}
.white--text {
  cursor: pointer;
}
</style>
