export const state = () => {
  return {
    stoWants: [],
    stoWant: [],
  }
}
export const getters = {
  wants: (state) => state.stoWants,
}

export const mutations = {
  setWants(state, data) {
    state.stoWants = data
  },
  setUpdatedWant(state, data) {
    state.stoWants.map((want) => {
      if (want.id === data.id) {
        want = data
      }
    })
  },
  wantAdd(state, data) {
    state.stoWants.push(data)
  },
  setWant(state, data) {
    state.stoWant = data
  },
}

export const actions = {
  async getWants({ commit }) {
    try {
      const response = await this.$axios.get('/api/v1/want')
      commit('setWants', response.data)
    } catch (error) {
      alert('getWants actions error')
      const res = error.response
      console.log('getWants actions error:')
      console.log(res)
    }
  },

  // wantの更新
  async wantUpdate({ commit }, want) {
    try {
      const response = await this.$axios.patch(`/api/v1/want/${want.id}`, want)
      commit('setUpdatedWant', response.data)
    } catch (err) {
      const res = err.response
      console.log(res)
    }
  },
  async wantCreate({ commit }, { name, categoryId, priority }) {
    try {
      const want = {
        want: {
          name: `${name}`,
          category_id: `${categoryId}`,
          priority: `${priority}`,
        },
      }
      const response = await this.$axios.post('/api/v1/want', want)
      console.log(response.data)
      commit('wantAdd', response.data)
    } catch (err) {
      const res = err.response
      console.log(res)
    }
  },
  async wantDelete(_, wantId) {
    try {
      console.log('test')
      await this.$axios.delete(`/api/v1/want/${wantId}`)
    } catch (err) {
      const res = err.response
      console.log('delete error:')
      console.log(res)
    }
  },
  async wantsUpdate({ commit }, wants) {
    try {
      const response = await this.$axios.patch('/api/v1/updates', wants)
      commit('setWants', response.data)
    } catch (err) {
      const res = err.response
      console.log('error updates actions :')
      console.log(res)
    }
  },
  async getWant({ commit }, want) {
    try {
      const response = await this.$axios.get(`/api/v1/want/${want.id}`)
      commit('setWant', response.data)
    } catch (err) {
      const res = err.response
      console.log('Actions error : getWamt')
      console.log(res)
    }
  },
}
