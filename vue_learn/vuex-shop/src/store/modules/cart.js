const state = {
  items: []
}
const getters = {

}
const actions = {
  addProductToCart ({state, commit}, product) {
    if (product.inventory > 0) {
      // 把商品加进inventory 要什么逻辑
      // 检查items里面有没有
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // 有 +1
      // 没有 push
    }
  } 
}
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity (state, { id }) {
    state.items.find(item => item.id === id).quantity++;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}