const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    list: null,
    unApplyList: null,
    info: null,
    err: null,
    leakErr: null,
    myProjects: null,
    myLeaks: null
  }),
  mutations: {
    setList(state, data) {
      state.list = data
    },
    setUnApplyList(state, data) {
      state.unApplyList = data
    },
    setInfo(state, data) {
      state.info = data
    },
    setMyProjects(state, data) {
      state.myProjects = data
    },
    setMyLeaks(state, data) {
      state.myLeaks = data
    },
    setError(state, err) {
      state.err = err
    },
    setLeakError(state, err) {
      state.leakErr = err
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
    },
    async fetchUnApply({ commit }, { page = 1, pagesize = 6, type = 0, title = '' }) {
      commit('setError', null)
      let uid = localStorage.getItem('d')
      let { data, err } = await request({
        url: `${apiRoot}/acc/unapply/pro/${uid}/${type}/${page}/${pagesize}?title=${title}`
      })
      if (err) commit('setError', err)
      else commit('setUnApplyList', data)
    },
    async mine({ commit }, { page = 1, pagesize = 6, title = '' }) {
      commit('setError', null)
      let uid = localStorage.getItem('d')
      let { data, err } = await request({
        url: `${apiRoot}/acc/pro/${uid}/${page}/${pagesize}?title=${title}`
      })
      if (err) commit('setError', err)
      else commit('setMyProjects', data)
    },
    async myLeaks({ commit }, { page = 1, pagesize = 6, title = '' }) {
      commit('setLeakError', null)
      let uid = localStorage.getItem('d')
      let { data, err } = await request({
        url: `${apiRoot}/acc/leak/${uid}/${page}/${pagesize}?title=${title}`
      })
      if (err) commit('setLeakError', err)
      else commit('setMyLeaks', data)
    }
  }
}
