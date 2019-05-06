import Vue from 'vue';
import 'lib-flexible/flexible';
import App from './App';
import router from './router';
import store from './store';

import Footer from './components/Footer/Footer.vue'
import Split from './components/Split/Split.vue'



Vue.component('Footer', Footer)
Vue.component('Split', Split)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
