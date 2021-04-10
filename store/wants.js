export const state = () => {
  return {
    stoWants: [],
  }
}
export const getters = {
  wants: (state) => state.stoWants,
}

export const mutations = {
  setWants(state, data) {
    state.stoWants = data
  },
  wantAdd(state, data) {
    state.stoWants.push(data)
  },
  wantUpdate(state, data) {
    state.stoWants.map((want) => {
      if (want.id === data.id) {
        want = data
      }
    })
  },
}

export const actions = {
  // railsからwantsを取得する
  async getWants({ commit }) {
    try {
      const response = await this.$axios.get('/api/v1/want')
      console.log(response)
      commit('setWants', response.data)
    } catch (error) {
      alert('getWants actions error')
      const res = error.response
      console.log('getWants actions error:')
      console.log(res)
    }
  },

  // vue側で更新したwantsを一斉更新したい
  wantsUpdate({ commit }, wants) {
    const data = []
    wants.map((want) => {
      try {
        const response = this.$axios.update(`/api/v1/want/${want.id}`, want)
        data.push(response.data)
      } catch (err) {
        const res = err.response
        console.log('wantsUpdata actions error :')
        console.log(res)
      }
    })
    commit('setWants', data)
  },

  // wantの更新
  async wantUpdate({ commit }, want) {
    try {
      const response = await this.$axios.patch(`/api/v1/want/${want.id}`, want)
      commit('wantUpdate', response.data)
      console.log(response.data)
    } catch (err) {
      const res = err.response
      console.log(res)
    }
  },
  async wantCreate({ commit }, { name, categoryId }) {
    try {
      console.log('foo')
      // strong parameter を突破できない
      const want = { want: { name: `${name}`, category_id: `${categoryId}` } }
      const response = await this.$axios.post('/api/v1/want', want)
      console.log(response.data)
      commit('wantAdd', response.data)
    } catch (err) {
      const res = err.response
      console.log(res)
    }
  },
}
