<template>
  <div class="w-full h-screen bg-black-30 fixed top-0 left-0 z-10 flex justify-center items-center">
    <div class="bg-white w-auto max-h-screen p-5">
      <button @click="closeModal">
        <font-awesome-icon icon="times" />
      </button>
      <div class="md:flex items-center">
        <img
          :src="modalData[0].images.primary.large"
          alt="product image"
          class="w-3/4">
        <div class="mt-10">
          <h2>{{ modalData[0].general.name }}</h2>
          <p>{{ modalData[0].general.presentable_id }}</p>
          <p>{{ modalData[0].brand.name }}</p>
          <p class="text-xs">
            <read-more
              more-str="read more"
              :text="modalData[0].general.description"
              less-str="read less"
              :max-chars="100" />
          </p>
        </div>
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
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {
  name: 'Modal',
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    ...mapState(['modalData']),
    ...mapMutations(['CLOSE_MODAL']),
  },
  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL');
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

<style lang=scss scoped>

</style>
