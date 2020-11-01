const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    person: null,
    team: null,
    err: null
  }),
  mutations: {
    setPerson(state, data) {
      state.person = data
    },
    setTeam(state, data) {
      state.team = data
    },
    setError(state, err) {
      state.err = err
    }
  },
  actions: {
    async person({ commit }, { top }) {
      let { data, err } = await request({
        url: `${apiRoot}/acc/top/0/${top}?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setPerson', data)
    },
    async team({ commit }, { top }) {
      let { data, err } = await request({
        url: `${apiRoot}/acc/top/1/${top}?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setTeam', data)
    }
  }
}
