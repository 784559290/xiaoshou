import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from '@/store'
import VueLazy from 'vue-lazyload'
import BootstrapVue from "bootstrap-vue";
import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/tool'

import '@assets/css/iconfont/iconfont.js'
import '@assets/css/iconfont/iconfont.css'

import 'vue2-animate/dist/vue2-animate.min.css'

//vue监听元素滑动插件
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(BootstrapVue)
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

Vue.prototype.$bus  =new Vue();

Vue.use(VueLazy)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
