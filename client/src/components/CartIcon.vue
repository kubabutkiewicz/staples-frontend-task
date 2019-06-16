<template>
  <button
    class="mt-2  rounded-full bg-orange-300 w-10 h-10 text-white relative focus:outline-none">
    <font-awesome-icon
      icon="shopping-cart" />
    <span class="bg-orange-600 h-5 w-5 rounded-full absolute right-0 top-0 mt-8 text-sm">{{ cartCount }}</span>
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cartCount']),
  },
};
</script>

<style>

</style>
