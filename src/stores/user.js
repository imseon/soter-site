const apiRoot = process.env.VUE_APP_API_ROOT
const apiAuthRoot = process.env.VUE_APP_AUTH_API_ROOT
import request from '@/libs/request'

export default {
  namespaced: true,
  state: () => ({
    user: null,
    stat: null,
    score: null,
    loginError: null,
    updateError: null,
    checkNameResult: null,
    addUserError: null
  }),
  mutations: {
    setUser(state, data) {
      state.user = data
    },
    setStat(state, data) {
      state.stat = data
    },
    setScore(state, data) {
      state.score = data
    },
    setLoginError(state, err) {
      state.loginError = err
    },
    setUpdateError(state, err) {
      state.updateError = err
    },
    setCheckNameResult(state, result) {
      state.checkNameResult = result
    },
    setAddUserError(state, err) {
      state.addUserError = err
    }
  },
  actions: {
    async login({ commit }, { params }) {
      commit('setLoginError', null)
      let { data, err } = await request({
        url: `${apiAuthRoot}/auth/login`,
        params
      })
      if (err) commit('setLoginError', err)
      else {
        localStorage.setItem('t', data.t)
        localStorage.setItem('d', data.u.id)
        localStorage.setItem('u', JSON.stringify(data.u))
        localStorage.setItem('zz', this.loginRole)
        commit('setUser', data)
      }
    },
    async logout({ commit }) {
      commit('setLoginError', null)
      let params = {
        token: localStorage.getItem('t')
      }
      let { err } = await request({
        url: `${apiAuthRoot}/auth/logout`,
        params
      })
      if (err) commit('setLoginError', err)
      else {
        localStorage.removeItem('userName')
        localStorage.removeItem('t')
        localStorage.removeItem('d')
        localStorage.removeItem('u')
        commit('setUser', null)
      }
    },
    async update({ commit }, { params }) {
      if (params) params.id = localStorage.getItem('d')
      commit('setUpdateError', null)
      let { err } = await request({
        method: 'POST',
        url: `${apiRoot}/acc/update`,
        data: params
      })
      if (err) commit('setUpdateError', err)
    },
    async stat({ commit }) {
      let uid = localStorage.getItem('d')
      let { err, data } = await request({
        url: `${apiRoot}/acc/stat/${uid}?t=${Date.now()}`
      })
      if (!err) {
        commit('setStat', data)
      }
    },
    async score({ commit }) {
      let uid = localStorage.getItem('d')
      let { err, data } = await request({
        url: `${apiRoot}/acc/score/${uid}?t=${Date.now()}`
      })
      if (!err) {
        commit('setScore', data)
      }
    },
    check({ commit }) {
      let u = localStorage.getItem('u')
      let t = localStorage.getItem('t')
      if (u) {
        let user = JSON.parse(u)
        commit('setUser', {
          u: user,
          t
        })
      } else {
        commit('setUser', null)
      }
    },
    async checkName({ commit }, { username }) {
      commit('setCheckNameResult', null)
      let { err, data } = await request({
        url: `${apiRoot}/acc/check/exist/${username}?t=${Date.now()}`
      })
      if (err) {
        commit('setCheckNameResult', {
          valid: false,
          message: err.message,
          username
        })
      } else {
        if (data) {
          commit('setCheckNameResult', {
            valid: false,
            message: '用户名已存在',
            username
          })
        } else {
          commit('setCheckNameResult', { valid: true, message: '用户名可用', username })
        }
      }
    },
    async add({ commit }, { params }) {
      commit('setAddUserError', null)
      let { err } = await request({
        method: 'POST',
        url: `${apiRoot}/acc/add`,
        data: params
      })
      if (err) {
        commit('setAddUserError', err)
      }
    },
    async checkProject({ commit }, { pid }) {
      void commit
      let uid = localStorage.getItem('d')
      let { data } = await request({
        url: `${apiRoot}/acc/check/apply/${uid}/${pid}`
      })
      return data
    },
    async forgetPwd({ commit }, { type, uname }) {
      void commit
      let { data, err } = await request({
        url: `${apiRoot}/util/forgotPwd/${type}/${uname}`
      })
      if (err) throw err
      return data
    },
    async resetPwd({ commit }, { params }) {
      void commit
      let { data, err } = await request({
        method: 'POST',
        url: `${apiRoot}/util/testpwd`,
        data: params
      })
      if (err) throw err
      return data
    }
  }
}
