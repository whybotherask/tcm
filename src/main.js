
/*
  Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill();
require('flatpickr/dist/flatpickr.css')
require('flatpickr/dist/themes/material_blue.css')


import Vue 		from 'vue'
import App 		from './App'
import Store 	from './store.js'
import Router from './routes.js'
import moment from 'moment'

Vue.config.productionTip = false

// modify String so that we can insert
String.prototype.insert = function (index, string) {
  if ( 0 <= index && index <= this.length )
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return this;
};

Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

new Vue({
  render: h => h(App),
  "store": Store,
  "router": Router,
}).$mount('#app')





