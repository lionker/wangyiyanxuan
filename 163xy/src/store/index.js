import Vue from 'vue'
import Vuex from 'Vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex);  // 全局注册对象

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})