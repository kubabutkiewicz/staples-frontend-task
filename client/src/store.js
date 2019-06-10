import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    loading: false,
    page: 1,
  },
  mutations: {
    ADD_PRODUCTS(state, payload) {
      state.products = [...payload.products];
    },
    LOADING(state) {
      state.loading = !state.loading;
    },
    UPDATE_PAGE(state, page) {
      state.page = page;
    },
  },
  actions: {
    getProducts({ commit }, pageNumber = 1) {
      commit({
        type: 'LOADING',
      });
      fetch(`http://localhost:3005/products?_page=${pageNumber}&_limit=6`)
        .then(resp => resp.json())
        .then((prod) => {
          commit({
            type: 'ADD_PRODUCTS',
            products: prod,
          });
          commit({
            type: 'LOADING',
          });
        });
    },
  },
});
