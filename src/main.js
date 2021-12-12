import Vue from 'vue'
import App from './App.vue'

import VueCarousel from 'vue-carousel';
import Router from './Routes.js'

import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('font-awesome-icon' ,FontAwesomeIcon);
//Sweet Alart
import VueSwal from 'vue-swal';
 Vue.use(VueSwal)

Vue.use(VueCarousel);
 


new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
 
})
