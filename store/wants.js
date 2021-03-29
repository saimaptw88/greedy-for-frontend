export const state = () => {
  return {
    categories: [
      {
        id: 1,
        name: 'your desier',
        collapsed: false,
      },
      {
        id: 2,
        name: 'goals you think must to do',
        collapsed: false,
      },
    ],
    tesks: [
      {
        id: 1,
        name: 'task1',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 1,
      },
      {
        id: 2,
        name: 'task2',
        start_data: '2021-3-28',
        end_data: '2021-3-28',
        incharge_user: 'saito',
        percentage: 100,
        category_id: 1,
      },
      {
        id: 3,
        name: 'task3',
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
  setTasks(state, tasks) {
    state.tasks = tasks
  },
}

export const actions = {
  async getTasks({ commit }) {
    try {
      const response = await this.$axios.get('/api/v1/want')
      commit('setTasks', response.data)
    } catch (error) {
      const res = error.response
      console.log(`error : ${res}`)
    }
  },
}
