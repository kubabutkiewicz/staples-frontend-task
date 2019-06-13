<template>
  <paginate
    v-model="page"
    :page-count="pageCount"
    :click-handler="clickCallback"
    :prev-text="'&leftarrow;'"
    :next-text="'&rightarrow;'"
    :page-class="'page'"
    class="flex items-center justify-around m-8 px-8 py-4 bg-white max-w-xl mx-auto" />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Paginate from 'vuejs-paginate';

export default {
  name: 'Pagination',
  components: {
    paginate: Paginate,
  },
  computed: {
    ...mapState(['pageCount']),
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

<style lang=css>
  .active {
    background-color: #f6ad55;
    color: white;
  }
  .page {
    padding: 5px 10px;
  }
</style>
