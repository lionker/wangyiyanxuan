import Vue from 'vue';
import 'lib-flexible/flexible';
import App from './App';
import router from './router';
import store from './store';
import './mock/mock-server';

import Footer from './components/Footer/Footer.vue'
import Split from './components/Split/Split.vue'
import Header from './components/Header/Header.vue';
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue';


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
