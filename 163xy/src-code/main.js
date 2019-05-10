/**
 * 入口文件
 */
import Vue from 'vue';
import 'lib-flexible/flexible';
import App from './App.vue';
import router from '../src/router';
import store from '../src/store';
import '../src/mock/mock-server';

import Footer from './src/components/Footer/Footer.vue';
import Header from './src/components/Header/Header.vue';
import Split from './src/components/Split/Split.vue';
import HeaderSlot from './src/components/HeaderSlot/HeaderSlot.vue';
// 注册全局组件
Vue.component('Footer', Footer);
Vue.component('Header', Header);
Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App />'
});
