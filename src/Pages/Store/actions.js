export default {
  addProdcutToCart( { commit },{ id, stock, title, thumbnail, price, quantity }) {
    //commiting the product 
    commit('addToCart', { id, stock, title, thumbnail, price, quantity });
  },
  removeProduct({ commit }, id) {
    commit('removeProcut', id);
  },
  userDetails(context) {
    //getting user  from the local storage for authentication
    const user = JSON.parse(localStorage.getItem('user'));
    context.dispatch('checkAuth', user);
  },
  checkAuth(context, user) {

    context.commit('userDetail', user);
  },
};
