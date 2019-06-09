<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <h2>{{product.brand.name}}</h2>
      <p>{{product.general.description }}</p>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ProductsList",
  computed: {
    ...mapState({
      products: "products"
    })
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts"
    })
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style>
</style>
