import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global from '@/utils/global'
import api from './http'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.global = global
Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
