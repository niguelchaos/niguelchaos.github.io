import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueSilentbox from 'vue-silentbox'
import AOS from 'aos'
import VueLazyload from 'vue-lazyload'

import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueSilentbox)
Vue.use(BootstrapVue)
Vue.use(VueSmoothScroll)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  mounted() {
    AOS.init()
  }
}).$mount('#app')
