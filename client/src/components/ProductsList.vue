<template>
  <ul>
    <Product
      v-for="product in products"
      :key="product.id"
      :data="product" />
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Product from './Product.vue';

export default {
  name: 'ProductsList',
  components: {
    Product,
  },
  computed: {
    ...mapState({
      products: 'products',
    }),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
    }),
  },

};
</script>

<style>
</style>
