
/*
  Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill();
require('moment');
require('flatpickr/dist/flatpickr.css')
require('flatpickr/dist/themes/material_blue.css')


import Vue 		from 'vue'
import App 		from './App'
import Store 	from './store.js'
import Router from './routes.js'
import moment from 'moment'

Vue.config.productionTip = false
// Object.defineProperty(Vue.prototype, '$moment', { value: moment }); // so we can use "this.$moment" in components

window.s = Store
window.m = moment

new Vue({
  render: h => h(App),
  "store": Store,
  "router": Router,
}).$mount('#app')
