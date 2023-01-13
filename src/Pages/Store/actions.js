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
  userDetails(context) {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user , 'this is user')
    context.dispatch('checkAuth',user)
  },
  checkAuth(context,user) {
    console.log(user , 'this is user')

    context.commit('userDetail', user);
  },
};
