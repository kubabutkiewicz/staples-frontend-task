<template>
  <div id="app">
    <h1 v-if="loading">
      Loading...
    </h1>
    <ProductsList />
    <Pagination />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ProductsList from './components/ProductsList.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    ProductsList,
    Pagination,
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style lang="scss">
</style>
