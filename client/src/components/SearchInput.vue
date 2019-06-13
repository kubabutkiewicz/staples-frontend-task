<template>
  <form
    class="relative flex items-start w-2/3 py-4 mb-12 md:w-1/3"
    @submit.prevent="search">
    <input
      id="search"
      v-model="query"
      type="text"
      class="input w-full absolute rounded-full border-orange-300 transition focus:shadow-md focus:outline-none px-6 py-1">

    <button
      type="submit"
      class="px-6 py-1 rounded-full text-white bg-orange-300 hover:bg-orange-500 transition absolute right-0">
      <font-awesome-icon icon="search" />
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchInput',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    ...mapActions({
      filter: 'filterProducts',
    }),
    search() {
      this.filter(this.query);
      this.query = '';
    },
  },
};
</script>

<style lang="scss" scoped>


</style>
