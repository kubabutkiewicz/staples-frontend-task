<template>
  <ul class="flex flex-col flex-wrap lg:flex-row md:justify-between items-center">
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
      filteredProducts: 'filteredProducts',
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
