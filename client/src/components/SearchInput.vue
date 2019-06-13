<template>
  <form
    class="flex flex-col items-start py-4 mb-8"
    @submit.prevent="search">
    <div class="flex flex-col">
      <label
        class="text-xs text-gray-500"
        for="search">Search product</label>
      <input
        id="search"
        v-model="query"
        type="text"
        class="input bg-transparent border-b-2 border-gray-600  transition focus:shadow-md focus:outline-none mb-4">
    </div>
    <input
      type="submit"
      value="Search"
      class="px-6 py-1 rounded text-white bg-orange-300 hover:bg-orange-500 transition">
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
