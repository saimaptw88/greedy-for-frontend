export const state = () => {
  return {
    stoGoal: [],
  }
}
export const getters = {
  getStoGoal: (state) => {
    return state.stoGoal
  },
}

export const mutations = {
  setGoal(state, data) {
    state.stoGoal = data
  },
}

export const actions = {
  async createGoal({ commit }) {
    try {
      const response = await this.$axios.post('/api/v1/goal')
      commit('setGoal', response.data)
    } catch (error) {
      alert('createGoal actions error')
      const res = error.response
      console.log('createGoal actions error:')
      console.log(res)
    }
  },
  async getGoal({ commit }) {
    try {
      const response = await this.$axios.get(`/api/v1/goal/1`)
      console.log(response.data)
      commit('setGoal', response.data)
    } catch (err) {
      const res = err.response
      console.log(res)
      alert('getGoal actions error')
    }
  },
  async updateGoal({ commit }, goal) {
    try {
      const response = await this.$axios.patch('/api/v1/goal/1', goal)
      commit('setGoal', response.data)
    } catch (err) {
      const res = err.response
      console.log(res)
      alert('updateGoal actions error')
    }
  },
}
