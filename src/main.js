import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

import Vue from 'vue'
import App from './App.vue'

import store from './store'
import utils from './utils'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
