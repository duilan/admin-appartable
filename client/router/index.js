import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  mode: 'hash',
=======
  mode: 'hash', // Demo is living in GitHub.io, so required!
>>>>>>> origin/master
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: require('../views/login/index'),
      meta: {
        auth: false
      }
    },
    {
      name: 'Inicio',
      path: '/',
      component: require('../views/Inicio'),
      meta: {
        auth: true
      }
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
