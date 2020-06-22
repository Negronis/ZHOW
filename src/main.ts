import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import common from '@/common/common';
import interface_common from '@/interface/interface_common';
Vue.config.productionTip = false; 
declare module 'vue/types/vue'{
  interface Vue{
    $common:interface_common
  }
} 
Vue.prototype.$common = common;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
