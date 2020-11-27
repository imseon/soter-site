const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    stat: null,
    accStat: null,
    proStat: null,
    err: null
  }),
  mutations: {
    setStat(state, data) {
      state.stat = data
    },
    setAccStat(state, data) {
      state.accStat = data
    },
    setProStat(state, data) {
      state.proStat = data
    },
    setError(state, err) {
      state.err = err
    }
  },
  actions: {
    async stat({ commit }) {
      commit('setError', null)
      let { data, err } = await request({
        url: `${apiRoot}/util/stat?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setStat', data)
    },
    async accStat({ commit }) {
      commit('setError', null)
      let { data, err } = await request({
        url: `${apiRoot}/acc/best?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setAccStat', data)
    },
    async proStat({ commit }) {
      commit('setError', null)
      let { data, err } = await request({
        url: `${apiRoot}/pro/stat?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setProStat', data)
    },
    async dic({ commit }, { id }) {
      void commit
      let { data } = await request({
        url: `${apiRoot}/util/dic/${id}`
      })
      return data
    }
  }
}
