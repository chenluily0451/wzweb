import Vue from 'vue'
import Router from 'vue-router'
import home from './home.vue'
Vue.use(Router)

const routes = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }]
})

export default routes