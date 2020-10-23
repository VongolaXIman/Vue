<!-- ProductApp.vue -->
<template>
  <div id="productApp">
    <h1>Product App!</h1>
    <!-- <product-list @product-click="onProductClick"></product-list>
<product-info v-if="product" :item="product"></product-info> -->
    <router-view />
  </div>
</template>
<script>
// import ProductList from '@/components/ProductList';
// import ProductInfo from '@/components/ProductInfo';
export default {
  data() {
    return {
      product: undefined,
    };
  },
  methods: {
    onProductClick(product) {
      this.product = product;
    },
  },
  components: {
    // ProductList,
    // ProductInfo,
  },
};
</script>