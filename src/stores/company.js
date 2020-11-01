const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    data: null,
    err: null,
    addCompanyError: null
  }),
  mutations: {
    setData(state, data) {
      state.data = data
    },
    setError(state, err) {
      state.err = err
    },
    setAddCompanyError(state, err) {
      state.addCompanyError = err
    }
  },
  actions: {
    async fetch({ commit }) {
      let uid = localStorage.getItem('d')
      let { data, err } = await request({
        url: `${apiRoot}/comp/info/${uid}?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setData', data)
    },
    async add({ commit }, { params }) {
      commit('setAddCompanyError', null)
      let { err } = await request({
        method: 'POST',
        url: `${apiRoot}/comp/add`,
        data: params
      })
      if (err) {
        commit('setAddCompanyError', err)
      }
    }
  }
}
