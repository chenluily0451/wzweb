import Vue from 'vue'
import Login from './Login.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../styles/index.scss'
// import './icons/iconfont.css'


Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(Login)
}).$mount('#app')
