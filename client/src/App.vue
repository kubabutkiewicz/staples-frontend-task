<template>
  <div
    id="app"
    class="bg-gray-200">
    <main class="container mx-auto px-6 flex flex-col">
      <BeatLoader
        :loading="loading" />
      <Modal v-if="isModalOpen" />
      <div class="flex justify-between mt-5">
        <SearchInput />
        <CartIcon />
      </div>
      <ProductsList />
      <Pagination />
    </main>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { BeatLoader } from '@saeris/vue-spinners';
import ProductsList from './components/ProductsList.vue';
import Pagination from './components/Pagination.vue';
import Modal from './components/Modal.vue';
import SearchInput from './components/SearchInput.vue';
import CartIcon from './components/CartIcon.vue';
import './assets/css/main.css';

export default {
  name: 'App',
  components: {
    ProductsList,
    Pagination,
    Modal,
    SearchInput,
    BeatLoader,
    CartIcon,
  },
  computed: {
    ...mapState(['loading', 'isModalOpen']),
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
