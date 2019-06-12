<template>
  <form @submit.prevent="search">
    <input
      v-model="query"
      type="text">
    <input
      type="submit"
      value="Search">
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

<style>

</style>
