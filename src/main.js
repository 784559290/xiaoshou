import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from '@/store'
import VueLazy from 'vue-lazyload'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import '@assets/css/iconfont/iconfont.js'
import '@assets/css/iconfont/iconfont.css'





Vue.use(BootstrapVue)
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$bus  =new Vue();

Vue.use(VueLazy)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
