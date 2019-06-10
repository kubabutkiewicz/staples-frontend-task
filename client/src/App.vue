<template>
  <div id="app">
    <h1 v-if="loading">
      Loading...
    </h1>
    <ProductsList />
    <paginate
      v-model="page"
      :page-count="14"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'" />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Paginate from 'vuejs-paginate';
import ProductsList from './components/ProductsList.vue';

export default {
  name: 'App',
  components: {
    ProductsList,
    paginate: Paginate,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState(['loading']),
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
    }),
    clickCallback(pageNum) {
      this.getProducts(pageNum);
    },
  },
};
</script>

<style lang="scss">
</style>
