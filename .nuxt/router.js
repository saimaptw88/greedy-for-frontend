import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09f5aa10 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _20eb0f88 = () => interopDefault(import('../pages/infomations.vue' /* webpackChunkName: "pages/infomations" */))
const _5dd35e60 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _1a352a01 = () => interopDefault(import('../pages/trial.vue' /* webpackChunkName: "pages/trial" */))
const _1a5c5cce = () => interopDefault(import('../pages/wants.vue' /* webpackChunkName: "pages/wants" */))
const _15f18ec5 = () => interopDefault(import('../pages/wants1_1.vue' /* webpackChunkName: "pages/wants1_1" */))
const _85a7d708 = () => interopDefault(import('../pages/daily/message.vue' /* webpackChunkName: "pages/daily/message" */))
const _657bf166 = () => interopDefault(import('../pages/users/login.vue' /* webpackChunkName: "pages/users/login" */))
const _2758cf64 = () => interopDefault(import('../pages/users/signup.vue' /* webpackChunkName: "pages/users/signup" */))
const _1abd05bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _09f5aa10,
    name: "about"
  }, {
    path: "/infomations",
    component: _20eb0f88,
    name: "infomations"
  }, {
    path: "/mypage",
    component: _5dd35e60,
    name: "mypage"
  }, {
    path: "/trial",
    component: _1a352a01,
    name: "trial"
  }, {
    path: "/wants",
    component: _1a5c5cce,
    name: "wants"
  }, {
    path: "/wants1_1",
    component: _15f18ec5,
    name: "wants1_1"
  }, {
    path: "/daily/message",
    component: _85a7d708,
    name: "daily-message"
  }, {
    path: "/users/login",
    component: _657bf166,
    name: "users-login"
  }, {
    path: "/users/signup",
    component: _2758cf64,
    name: "users-signup"
  }, {
    path: "/",
    component: _1abd05bd,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
