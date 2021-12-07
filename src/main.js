import Vue from 'vue'
import App from './App.vue'

import VueCarousel from 'vue-carousel';
import Router from './Routes.js'

//Sweet Alart
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

 
Vue.use(VueCarousel);
 


new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
 
})
