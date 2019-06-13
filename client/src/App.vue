<template>
  <div
    id="app"
    class="container mx-auto px-6 flex flex-col bg-gray-200">
    <BeatLoader :loading="loading" />
    <Modal v-if="isModalOpen" />
    <SearchInput />
    <ProductsList />
    <Pagination />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { BeatLoader } from '@saeris/vue-spinners';
import ProductsList from './components/ProductsList.vue';
import Pagination from './components/Pagination.vue';
import Modal from './components/Modal.vue';
import SearchInput from './components/SearchInput.vue';
import './assets/css/main.css';

export default {
  name: 'App',
  components: {
    ProductsList,
    Pagination,
    Modal,
    SearchInput,
    BeatLoader,
  },
  computed: {
    ...mapState(['loading', 'isModalOpen']),
  },
  mounted() {
    this.getPageCount();
  },
  methods: {
    ...mapActions({
      getPageCount: 'getPageCount',
    }),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:300,400&display=swap');
body {
  font-family: "Open Sans";
}
span {
  display: block;
  margin-top: 10px;
  #readmore {
  background-color: #f6ad55;
  padding: 3px 15px;
  color: white;
  border-radius: 20px;
}
}

</style>
