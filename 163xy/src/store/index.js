import Vue from 'vue'
import Vuex from 'Vuex'

// import state from './state'
import actions from './actions'
// import mutations from './mutations'
import getters from './getters'

import main from './modules/main';
import categores from './modules/categores';
import knowLedge from './modules/knowLedge';
import search from './modules/search';
Vue.use(Vuex);  // 全局注册对象

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    main,
    categores,
    knowLedge,
    search
  }
})