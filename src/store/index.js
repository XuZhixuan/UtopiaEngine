import Vue from 'vue'
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: {
      num: 0,
      status: false
    },
    inventories: {
      componets: {},
      devices: {},
      treasures: {},
      tools: {}
    }
  },
  mutations: {
    changeDays (state, payload) {
      state.days = payload
    },
    // changeInventories (state, payload) {

    // }
  },
  actions: {
    //
  },
  module: {
    //
  },
  plugins: [
    persistedState()
  ]
})
