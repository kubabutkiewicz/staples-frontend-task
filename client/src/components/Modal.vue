<template>
  <div class="w-full h-screen bg-black-30 fixed top-0 left-0 z-10 flex justify-center items-center animate">
    <div class="bg-white w-full max-h-screen p-5 overflow-y-scroll md:min-w-1/2 relative">
      <button
        class="absolute right-0 mr-10 p-2"
        @click="closeModal">
        <font-awesome-icon icon="times" />
      </button>
      <div class="md:flex items-center justify-around">
        <img
          :src="modalData[0].images.primary.large"
          alt="product image"
          class="md:w-1/2">
        <div class="mt-10">
          <h2 class="font-bold text-lg">
            {{ modalData[0].general.name }}
          </h2>
          <p class="text-sm text-gray-500 mb-4">
            {{ modalData[0].general.presentable_id }}
          </p>
          <p class="text-md mb-2">
            {{ modalData[0].brand.name }}
          </p>
          <p class="text-xs md:mr-5">
            <read-more
              more-str="read more"
              :text="modalData[0].general.description"
              less-str="read less"
              :max-chars="150" />
          </p>
          <div class="mt-8 mb-4 self-start w-2/3">
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
          <button
            class="px-5 py-2 rounded text-white bg-orange-600"
            @click="addToCart">
            Add to cart
          </button>
        </div>
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
    ...mapMutations(['CLOSE_MODAL', 'ADD_TO_CART']),
  },
  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL');
    },
    addToCart() {
      if (this.quantity > 0) {
        this.$store.commit({
          type: 'ADD_TO_CART',
          obj: {
            item: this.data,
            quantity: this.quantity,
          },
        });
      }
      this.quantity = 0;
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
<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.animate {
  animation: fadeIn 0.2s ease-in-out;
}
</style>
