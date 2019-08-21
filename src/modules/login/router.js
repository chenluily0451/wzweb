import Vue from 'vue'
import Router from 'vue-router'
import login from './Login.vue'

Vue.use(Router)

const routes = new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }]
})

export default routes