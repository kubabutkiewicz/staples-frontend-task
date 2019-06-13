import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ReadMore from 'vue-read-more';
import store from './store';
import App from './App.vue';

Vue.use(ReadMore);

library.add(faSearch, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
