import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login.vue'
import Container from './views/container/Container.vue'
import HelloWorld from './components/HelloWorld.vue'
import dashboard from './views/dashboard/index.vue'
import article from './views/article/index.vue'

Vue.use(Router)

const routes = new Router({
  routes: [{
    path: '/',
    name: 'Container',
    component: Container,
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta:{title:'dashboard'}
    },{
      path: '/article',
      name: 'article',
      component: article,
      meta:{title:'article'}
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{title:'helloworld'}
    }]
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]
})

export default routes