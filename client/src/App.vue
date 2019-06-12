<template>
  <div id="app">
    <h1 v-if="loading">
      Loading...
    </h1>
    <Modal v-if="isModalOpen" />
    <SearchInput />
    <ProductsList />
    <Pagination />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ProductsList from './components/ProductsList.vue';
import Pagination from './components/Pagination.vue';
import Modal from './components/Modal.vue';
import SearchInput from './components/SearchInput.vue';

export default {
  name: 'App',
  components: {
    ProductsList,
    Pagination,
    Modal,
    SearchInput,
  },
  computed: {
    ...mapState(['loading', 'isModalOpen']),
  },
};
</script>

<style lang="scss">
</style>
