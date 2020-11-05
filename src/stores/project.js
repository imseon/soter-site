const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    list: null,
    unApplyList: null,
    info: null,
    leakInfo: null,
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
    setLeakInfo(state, data) {
      state.leakInfo = data
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
    async mine({ commit }, { page = 1, pagesize = 6, title = '', type = 'acc' }) {
      commit('setError', null)
      let uid = localStorage.getItem('d')
      let { data, err } = await request({
        url: `${apiRoot}/${type}/pro/${uid}/${page}/${pagesize}?title=${title}`
      })
      if (err) commit('setError', err)
      else commit('setMyProjects', data)
    },
    async myLeaks({ commit }, { page = 1, pagesize = 6, title = '', type = 'acc' }) {
      commit('setLeakError', null)
      let uid = localStorage.getItem('d')
      let { data, err } = await request({
        url: `${apiRoot}/${type}/leak/${uid}/${page}/${pagesize}?title=${title}`
      })
      if (err) commit('setLeakError', err)
      else commit('setMyLeaks', data)
    },
    async add({ commit }, { params }) {
      commit('setError', null)
      let { err } = await request({
        method: 'POST',
        url: `${apiRoot}/pro/add`,
        data: params
      })
      if (err) commit('setError', err)
    },
    async leakInfo({ commit }, { aid }) {
      commit('setLeakError', null)
      let { data, err } = await request({
        url: `${apiRoot}/leak/info/${aid}`
      })
      if (err) commit('setLeakError', err)
      else commit('setLeakInfo', data)
    },
    async verify({ commit }, { leakId }) {
      commit('setLeakError', null)
      let { err } = await request({
        url: `${apiRoot}/comp/varify/${leakId}`
      })
      if (err) commit('setLeakError', err)
    }
  }
}
