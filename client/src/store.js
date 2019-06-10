import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    loading: false,
  },
  mutations: {
    ADD_PRODUCTS(state, payload) {
      state.products = [...payload.products];
    },
    LOADING(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    getProducts({ commit }, pageNumber = 1) {
      commit({
        type: 'LOADING',
      });
      fetch(`http://localhost:3005/products?_page=${pageNumber}`)
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
