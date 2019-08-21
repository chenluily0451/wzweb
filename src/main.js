import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
// import './icons/iconfont.css'


Vue.use(iView)
Vue.use(ElementUI)
Vue.config.productionTip = false


router.beforeEach((to,from,next) => {
  if(to.path === '/login'){
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');
  if(!user && to.path !== '/login'){
    next({
      path:'/login'
    })
  }else{
    next();
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
