import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    currentPage: 1,
    loading: false,
  },
  mutations: {
    ADD_PRODUCTS(state, payload) {
      state.products = [...payload.products];
    },
    LOADING(state) {
      state.loading = !state.loading;
    },
    CHANGE_PAGE(state, payload) {
      switch (payload.value) {
        case 'next':
          state.currentPage += 1;
          break;
        case 'prev':
          state.currentPage += 1;
          break;
        default:
          state.currentPage = payload.value;
      }
    },
  },
  actions: {
    getProducts({ commit, state }) {
      commit({
        type: 'LOADING',
      });
      fetch(`http://localhost:3005/products?_page=${state.currentPage}`)
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
