import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/product',
    name: 'product',
    component: () => import('./components/ProductList.vue'),
  },
  {
    path: '/product/:id',
    name: 'productInfo',
    component: () => import('./components/ProductInfo.vue'),
  },
  { path: '*', redirect: '/product' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
