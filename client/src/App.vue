<template>
  <div id="app">
    <h1 v-if="this.loading">Loading...</h1>
    <ProductsList></ProductsList>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductsList from "./components/ProductsList";
export default {
  name: "app",
  components: {
    ProductsList
  },
  computed: {
    ...mapState({
      loading: "loading"
    })
  }
};
</script>

<style lang="scss">
</style>
