import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - greedy-for-frontend',
    title: 'greedy-for-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/cookie-storage.js', '~/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // https://github.com/nuxt-community/google-gtag-module?
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-TB2VLG02LP',
        debug: true,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: ['http://localhost:3000'],
    baseURL: ['https://ameimon.herokuapp.com'],
  },

  // Auth module refer to https://qiita.com/nakanishi03/items/b15f9cc1ae49bd984167
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: false,
      home: '/mypage',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: '/api/v1/auth/logout', method: 'post' },
          user: false,
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          background: '#ABDCD9',
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          background: '#ABDCD9',
          primary: '#00d8db',
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'inline-cheap-module-source-map'
      }
    },
  },
}
