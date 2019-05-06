import Vue from 'vue'
import Vuex from 'Vuex'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    // main,
    // categoryList
  }
})