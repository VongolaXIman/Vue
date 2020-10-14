import Vue from 'vue'
// import App from './App.vue'
import router from './router';
import ProductApp from './ProductApp.vue';
import Currency from './filters/Currency';

Vue.config.productionTip = false
Vue.filter('currency', Currency);

new Vue({
  router,
  // render: h => h(App),
  render: h => h(ProductApp),
}).$mount('#app')
