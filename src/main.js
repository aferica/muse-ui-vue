// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use( MuseUI)
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
// import 'swiper/dist/css/swiper.css'

import global_ from './config/global'
Vue.prototype.GLOBAL = global_

// Vue.use( VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
