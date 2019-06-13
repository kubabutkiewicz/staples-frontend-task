<template>
  <div
    class="bg-white p-8 mb-8 flex flex-col justify-center items-center rounded max-w-md"
    @click.self="openModal">
    <img
      :src="data.images.primary.large"
      alt="product image"
      class="mb-8">
    <div class="self-start">
      <h2 class="font-bold text-lg w-40 mb-2">
        {{ data.general.name }}
      </h2>
      <p class="text-sm text-gray-500">
        {{ data.general.presentable_id }}
      </p>
    </div>
    <div class="mt-8 mb-8 self-start">
      <button
        class="px-4 py-2 text-white bg-orange-300 rounded focus:outline-none"
        @click="subtractQuantity">
        -
      </button>
      <input
        v-model="quantity"
        type="text"
        class="mb-4 w-10 text-center focus:outline-none">
      <button
        class="px-4 py-2 text-white bg-orange-300 rounded focus:outline-none"
        @click="addQuantity">
        +
      </button>
    </div>
    <button class="w-full py-2 rounded text-white bg-orange-600">
      Add to cart
    </button>
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
    addQuantity() {
      this.quantity += 1;
    },
    subtractQuantity() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    },
  },
};
</script>

<style scoped lang="scss">

</style>
