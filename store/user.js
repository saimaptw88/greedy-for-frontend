export const state = () => {
  return {
    headers: {},
    login: false,
  }
}

export const getters = {
  headers: (state) => state.headers,
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
      // window.location.href = '/index'
      await this.$axios.delete('/auth/sign_out')
      commit('logout')
      this.$router.push('../')
    } catch (err) {
      const res = err.response
      console.log('logout actions error:')
      console.log(res)
      alert('error logout actions')
    }
  },
}
