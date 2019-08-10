import shop from '../../api/shop';

const state = {
  all: []
}
const getters = {

}
const actions = {
  getAllProducts ({commit}) {
    // 前后端分离 actions => api
    shop.getProducts(products => {
      commit('setProducts', products);
    });
  }
}
const mutations = {
  setProducts (state, products) {
    state.all = products;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}