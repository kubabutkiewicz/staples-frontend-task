<template>
  <paginate
    v-model="page"
    :page-count="24"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'" />
</template>

<script>
import { mapActions } from 'vuex';
import Paginate from 'vuejs-paginate';

export default {
  name: 'Pagination',
  components: {
    paginate: Paginate,
  },
  computed: {
    page: {
      get() {
        return this.$store.state.page;
      },
      set(value) {
        this.$store.commit('UPDATE_PAGE', value);
      },
    },
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
    }),
    clickCallback(pageNum) {
      this.getProducts(pageNum);
    },
  },
};
</script>

<style>

</style>
