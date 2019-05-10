import Vue from 'vue';
import 'lib-flexible/flexible';
import VueLazyload from 'vue-lazyload'

import App from './App';
import router from './router';
import store from './store';
import './mock/mock-server';
import loading from './assets/images/loading.gif'
import './validate'

import Footer from './components/Footer/Footer.vue'
import Split from './components/Split/Split.vue'
import Header from './components/Header/Header.vue';
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue';

// 使用插件
Vue.use(VueLazyload, { // 内部会定义一个指令: lazy
  loading,
})

Vue.component('Footer', Footer)
Vue.component('Split', Split)
Vue.component('Header', Header)
Vue.component('HeaderSlot', HeaderSlot)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
