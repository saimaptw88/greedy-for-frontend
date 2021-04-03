export const state = () => {
  return {
    stoWants: [
      {
        id: 1,
        name: 'want1',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 1,
      },
      {
        id: 2,
        name: 'want2',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 1,
      },
      {
        id: 3,
        name: 'want3',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 1,
      },
      {
        id: 4,
        name: 'want4',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 1,
      },
      {
        id: 5,
        name: 'want5',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 2,
      },
    ],
  }
}

export const mutations = {
  setWants(state, data) {
    state.stoWants = data
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
}
