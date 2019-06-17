import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    loading: false,
    page: 1,
    isModalOpen: false,
    modalData: null,
    cart: [],
    cartCount: JSON.parse(localStorage.getItem('shoppingCart')),

  },
  mutations: {
    ADD_PRODUCTS(state, payload) {
      state.products = [...payload.products];
    },
    FILTER_PRODUCTS(state, payload) {
      state.products = [...payload.products];
    },
    LOADING(state) {
      state.loading = !state.loading;
    },
    UPDATE_PAGE(state, page) {
      state.page = page;
    },
    OPEN_MODAL(state, id) {
      state.isModalOpen = true;
      state.modalData = state.products.filter(product => product.id === id);
    },
    CLOSE_MODAL(state) {
      state.isModalOpen = false;
      state.modalData = null;
    },
    ADD_TO_CART(state, payload) {
      state.cart = [...state.cart, payload.obj];
      state.cartCount += payload.obj.quantity;
      localStorage.setItem('shoppingCart', state.cartCount);
    },

  },
  actions: {
    getProducts({ commit }, pageNumber = 1) {
      commit({
        type: 'LOADING',
      });
      fetch(`http://localhost:3005/products?_page=${pageNumber}&_limit=6`)
        .then((resp) => {
          console.log(resp.headers.get('Link'));
          return resp.json();
        })
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
    filterProducts({ commit }, query) {
      commit({
        type: 'LOADING',
      });
      fetch(`http://localhost:3005/products?q=${query}`)
        .then(resp => resp.json())
        .then((prod) => {
          commit({
            type: 'FILTER_PRODUCTS',
            products: prod,
          });
          commit({
            type: 'LOADING',
          });
        });
    },
  },
});
