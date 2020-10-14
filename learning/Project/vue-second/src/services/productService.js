import products from '@/assets/data/product';
export default {
get(id) {
if (id) {
return products.find(product => product.id === Number(id));
}
return products;
},
};