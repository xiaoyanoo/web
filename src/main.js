import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';
import '@/fonts/font/iconfont.js';
import '@/static/common.css'
import animated from 'animate.css'

Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
