const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

const DEFAULT_PAGE = 1
const DEFAULT_PAGESIZE = 10

export default {
  namespaced: true,
  state: () => ({
    notice: null,
    err: null
  }),
  mutations: {
    setNotice(state, data) {
      state.notice = data
    },
    setError(state, err) {
      state.err = err
    }
  },
  actions: {
    async fetch({ commit }, { page = DEFAULT_PAGE, pagesize = DEFAULT_PAGESIZE }) {
      let { data, err } = await request({
        url: `${apiRoot}/notice/list/${page}/${pagesize}?t=${Date.now()}`
      })
      if (err) commit('setError', err)
      else commit('setNotice', data)
    }
  }
}
