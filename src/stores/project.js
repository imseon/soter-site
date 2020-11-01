const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    list: null,
    info: null,
    err: null
  }),
  mutations: {
    setList(state, data) {
      state.list = data
    },
    setInfo(state, data) {
      state.info = data
    },
    setError(state, err) {
      state.err = err
    }
  },
  actions: {
    async top({ commit }, { top }) {
      commit('setError', null)
      let { data, err } = await request({
        url: `${apiRoot}/pro/top/${top}?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setList', data)
    },
    async info({ commit }, { pid }) {
      commit('setError', null)
      let { data, err } = await request({
        url: `${apiRoot}/pro/info/${pid}?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setInfo', data)
    }
  }
}
