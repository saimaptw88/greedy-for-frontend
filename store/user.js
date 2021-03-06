// import { resetAutoDestroyState } from '@vue/test-utils'

export const state = () => {
  return {
    headers: {},
    login: false,
  }
}

export const getters = {
  headers: (state) => state.headers,
  login: (state) => state.login,
}

export const mutations = {
  login(state, data) {
    state.headers = data
    state.login = true
  },

  logout(state) {
    state.login = false
    state.headers = ''
  },
}
// await this.$store.dispatch('user/login', this.user)
export const actions = {
  async signup({ commit }, user) {
    try {
      const response = await this.$axios.post('/auth', user)
      const headers = response.headers
      const loginInfoHeaders = {
        'access-token': headers['access-token'],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
        'token-type': headers['token-type'],
      }

      commit('login', loginInfoHeaders)
      window.location.href = '/wants'
    } catch (err) {
      const res = err.response
      console.log('sign up actions error:')
      console.log(res)
      alert('sign up actions error')
    }
  },

  async login({ commit }, user) {
    try {
      const response = await this.$axios.post('/auth/sign_in', user)
      const headers = response.headers
      const loginInfoHeaders = {
        'access-token': headers['access-token'],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
        'token-type': headers['token-type'],
      }
      console.log('loginInfoHeaders:')
      console.log(loginInfoHeaders)
      commit('login', loginInfoHeaders)
      window.location.href = '/mypage'
    } catch (err) {
      const res = err.response
      console.log('login actions error:')
      console.log(res)
      alert('login actions error')
    }
  },

  async logout({ commit }) {
    try {
      // commit('logout')
      // window.location.href = '/'
      await this.$axios.delete('/auth/sign_out')
      commit('logout')
      window.location.href = '/'
    } catch (err) {
      const res = err.response
      console.log('logout actions error:')
      console.log(res)
      alert('error logout actions')
    }
  },

  reset({ commit }) {
    commit('logout')
  },
}
