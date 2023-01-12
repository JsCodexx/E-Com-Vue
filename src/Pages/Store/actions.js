export default {
  addProdcutToCart(
    { commit },
    { id, stock, title, thumbnail, price, quantity }
  ) {
    // alpha={ product, quantity, title }
    // console.log(alpha)
    commit('addToCart', { id, stock, title, thumbnail, price, quantity });
  },
  removeProduct({ commit }, id) {
    commit('removeProcut', id);
  },
  
};
