<template>
  <div @click="openModal">
    <img
      :src="data.images.primary.large"
      alt="product image">
    <h2>{{ data.general.name }}</h2>
    <p>{{ data.general.presentable_id }}</p>
    <input
      v-model="quantity"
      type="text">
    <button>Add</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Product',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    ...mapMutations(['OPEN_MODAL']),
  },
  methods: {
    openModal() {
      this.$store.commit('OPEN_MODAL', this.data.id);
    },
  },
};
</script>

<style>

</style>
