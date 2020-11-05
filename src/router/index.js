import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/messageCenter',
    name: 'Notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/myCenter',
    name: 'MyCenter',
    component: () => import('../views/MyCenter.vue')
  },
  {
    path: '/companyCenter',
    name: 'CompanyCenter',
    component: () => import('../views/CompanyCenter.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/register2',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/register3',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/register4',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/registerCompany',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/userInfo',
    name: 'Register',
    component: () => import('../views/ProjectInfo.vue')
  },
  {
    path: '/projectRoom',
    name: 'ProjectRoom',
    component: () => import('../views/ProjectRoom.vue')
  },
  {
    path: '/rule',
    name: 'Rule',
    component: () => import('../views/Rule.vue')
  },
  {
    path: '/projectIssue',
    name: 'ProjectIssue',
    component: () => import('../views/ProjectIssue.vue')
  },
  {
    path: '/companyleakInfo',
    name: 'CompanyLeakInfo',
    component: () => import('../views/CompanyLeakInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
