<template>
<div>
  <h2>Product Info</h2>
  <button class="link" @click="onBackClick">
<i class="arrow-left"></i> Back
</button>
<div class="product-container">
<div class="product-title">{{ product.name }}</div>
<div class="product-image">
<img :src="product.imgUrl" />
</div>
<div class="product-info">
<div class="product-content">{{ product.desc }}</div>
<span class="product-price">{{ product.price | currency }}</span>
<div class="purchase-form">
  <div class="form-control">
<label for="qty">Qty: </label>
<input type="number" id="qty" v-model="quantity">
</div>
<div class="purchase-amount">{{ amount | currency }}</div>
</div>
</div>
</div>
</div>
</template>
<script>
import productService from '@/services/productService';
export default {
name: 'ProductInfo',
data() {
return {
product: {},
quantity: 0,
};
},
created() {
  this.product = productService.get(this.$route.params.id);
},
watch: {
item(value) {
this.product = value;
},
},
computed: {
amount() {
return this.product.price * this.quantity;
},
},
methods: {
onBackClick() {
this.$router.back();
},
},
};
</script>
<style scoped>
.product-container {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
background: #eee;
border-radius: 3px;
font-family: sans-serif;
}
.product-title {
width: 100%;
padding: 10px 20px;
font-size: 2.5em;
}
.product-image {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 10px;
}
.product-image img {
align-self: center;
width: 60%;
height: auto;
border: 1px solid #ddd;
border-radius: 5px;
}
.product-info {
width: 100%;
padding: 10px;
}
.product-content {
width: 100%;
font-size: 1.5em;
}
.product-price {
color: rgba(255, 30, 0, 0.884);
font-size: 2em;
float: right;
}

.purchase-form {
display: flex;
flex-wrap: nowrap;
width: 100%;
justify-content: center;
align-items: baseline;
}
.form-control {
display: flex;
justify-content: flex-end;
width: 50%;
padding: 10px;
}
.form-control label {
font-size: 1.2em;
}
.form-control input::-webkit-inner-spin-button{
-webkit-appearance: none;
}
.form-control input {
margin: 0 5px;
border: 1px solid #ddd;
box-sizing: border-box;
border-radius: 2px;
line-height: 20px;
width: 40px;
font-size: 1.1em;
text-align: center;
}

.link {
margin: 5px;
display: inline-block;
padding: 6px 12px;
font-size: 14px;
text-align: center;
text-decoration: underline;
border: none;
font-weight: 400;
color: #337ab7;
background-color: #fff;
}
.link:hover {
cursor: pointer;
}
.arrow-left {
border: solid;
border-width: 0 2px 2px 0;
display: inline-block;
padding: 3px;
-webkit-transform: rotate(135deg);
transform: rotate(135deg);
}

</style>