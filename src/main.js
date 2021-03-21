import Vue from 'vue'
import App from './App.vue'

import store from './store'
import utils from './utils'

Vue.config.productionTip = false
Vue.prototype.$utils = utils

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
