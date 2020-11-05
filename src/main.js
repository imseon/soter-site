import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'

import ElementUI from './element-ui'
import './styles/element-vars.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

import noticeStore from './stores/notice'
import projectStore from './stores/project'
import rankStore from './stores/rank'
import utilStore from './stores/util'
import userStore from './stores/user'
import companyStore from './stores/company'

const store = new Vuex.Store({
  modules: {
    notice: noticeStore,
    project: projectStore,
    rank: rankStore,
    util: utilStore,
    user: userStore,
    company: companyStore
  }
})

// 登录检查
router.beforeEach((to, from, next) => {
  let role = localStorage.getItem('t')
  if (!role && ['/login', '/home', '/forgetPwd', '/rule', '/messageCenter', '/register', '/register2', '/register3', '/registerCompany', '/register4', '/registersupp'].indexOf(to.path) < 0) {
    next('/login')
  } else {
    let u = localStorage.getItem('u')
    if (u) {
      let acc = JSON.parse(u)
      if (!acc.identitycard && ['/home', '/editPwd', '/forgetPwd', '/rule', '/messageCenter', '/companyLeakInfo', '/projectIssue', '/companyCenter', '/projectInfo'].indexOf(to.path) < 0) {
        next('/home')
        return
      }
    }
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
