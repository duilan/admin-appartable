import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
<<<<<<< HEAD
import VueSweetAlert from 'vue-sweetalert'
=======
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
>>>>>>> origin/master

Vue.use(Resource)
Vue.use(NProgress)
Vue.use(VueSweetAlert)
// URL API
Vue.http.options.root = 'http://127.0.0.1:1337'
// Pone http[s] con ngrok
// Vue.http.options.root = 'http://172.20.10.4:1337'

sync(store, router)

const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store
<<<<<<< HEAD
const { config } = state
const isLogin = true
=======
>>>>>>> origin/master

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
  // Authorization
  console.log(route.meta.auth)
  if (route.meta.auth) {
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
