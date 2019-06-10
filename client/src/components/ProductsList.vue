<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      <img
        :src="product.images.primary.large"
        alt="Product image">
      <h2>{{ product.general.name }}</h2>
      <p>{{ product.general.presentable_id }}</p>
      <input
        v-model="quantity"
        type="text">
      <button>Add</button>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProductsList',
  data() {
    return {
      quantity: 0,
    };
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
