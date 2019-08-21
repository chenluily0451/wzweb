import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login.vue'
import Container from './views/container/Container.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.use(Router)

const routes = new Router({
  routes: [{
    path: '/',
    name: 'Container',
    component: Container
  }, {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})

export default routes