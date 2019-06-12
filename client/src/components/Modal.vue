<template>
  <div>
    <button @click="closeModal">
      Close Modal
    </button>
    <img
      :src="modalData[0].images.primary.large"
      alt="product image">
    <h2>{{ modalData[0].general.name }}</h2>
    <p>{{ modalData[0].general.presentable_id }}</p>
    <p>{{ modalData[0].brand.name }}</p>
    <p>{{ modalData[0].general.description }}</p>
    <input
      v-model="quantity"
      type="text">
    <button>Add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Modal',
  computed: {
    ...mapState(['modalData', 'quantity']),
    ...mapMutations(['CLOSE_MODAL']),
  },
  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL');
    },
  },
};
</script>

<style>

</style>
