<template>
  <div>
    <div
      class="product-container"
      v-for="product in products"
      :key="product.id"
      @click="onProductClick(product)"
    >
      <div class="product-image">
        <img class="img-responsive" :src="product.imgUrl" />
      </div>
      <div class="product-info">
        <div class="product-title">{{ product.name }}</div>
        <div class="product-content">{{ product.desc }}</div>
        <span class="product-price">{{ product.price | currency }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import productService from "@/services/productService";
export default {
  name: "ProductList",
  data() {
    return {
      products: [
        // {
        // id: 1,
        // name: 'Car',
        // imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
        // desc: 'A luxury car you won\'t miss it.',
        // price: 199.99,
        // },
        // {
        // id: 2,
        // name: 'Bike',
        // imgUrl: 'https://images.pexels.com/photos/1239460/pexels-photo-1239460.jpeg?auto=compress&cs=tinysrgb&h=350',
        // desc: 'A durable bike you\'ve never ride.',
        // price: 25.00,
        // },
      ],
    };
  },
  created() {
    this.products = productService.get();
  },
  methods: {
    onProductClick(product) {
      this.$router.push({ name: "productInfo", params: { id: product.id } });
    },
  },
};
</script>
