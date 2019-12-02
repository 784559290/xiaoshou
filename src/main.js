import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from '@/store'
import axios from 'axios'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
