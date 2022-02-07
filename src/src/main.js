import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
// import VueSilentbox from 'vue-silentbox'
import AOS from 'aos'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import CoolLightBox from 'vue-cool-lightbox'
import LightBox from 'vue-image-lightbox'
// import VueAgile from 'vue-agile'

import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/css/swiper.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'


Vue.use(BootstrapVue)
Vue.use(VueSmoothScroll)
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(CoolLightBox)
Vue.use(LightBox)
// Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  mounted() {
    AOS.init()
  }
}).$mount('#app')
