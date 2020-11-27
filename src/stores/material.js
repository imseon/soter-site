const apiRoot = process.env.VUE_APP_API_ROOT
import request from '@/libs/request'

const DEFAULT_PAGE = 1
const DEFAULT_PAGESIZE = 10

export default {
  namespaced: true,
  state: () => ({
    data: null,
    err: null
  }),
  mutations: {
    setData(state, data) {
      state.data = data
    },
    setError(state, err) {
      state.err = err
    }
  },
  actions: {
    async fetch({ commit }, { page = DEFAULT_PAGE, pagesize = DEFAULT_PAGESIZE }) {
      let { data, err } = await request({
        url: `${apiRoot}/material/page?pn=${page}&ps=${pagesize}`
      })
      if (err) commit('setError', err)
      else commit('setData', data)
    },
    async info({ commit }, { id }) {
      void commit
      let { data, err } = await request({
        url: `${apiRoot}/material/info/${id}`
      })
      if (!err) {
        return data
      }
    }
  }
}
