import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/reset.css'
// 引入后用于解决移动端出现1像素边框的问题
import './assets/css/border.css'
// 引入字体CSS
import './assets/icon/iconfont.css'
// 引入vue-awesome-swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入fastclick
import fastClick from 'fastclick'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
