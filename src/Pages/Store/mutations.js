export default {
  addToCart(state, { id, stock, title, thumbnail, price, quantity }) {
    //to check if the product is already added
    let productInCart = state.cart.find((item) => {
      return item.id === id;
    });
    if (productInCart) {
      productInCart.quantity++;
    } else {
      state.cart.push({
        stock,
        title,
        thumbnail,
        price,
        quantity,
        id,
      });
    }

  },
  removeProcut(state, id) {
    state.cart = state.cart.filter((cartProducts) => cartProducts.id != id);
  },

  userDetail(state, user) {
    state.userDetails = user;

    //getting user token from the local storage

    const token = localStorage.getItem('token');
    if ((state.userDetails.token = token)) {
      // checking if the current user token equalls to the stored token
      state.token = token;
      state.isAuthenticated = true;
    } else {
      state.isAuthenticated = false;
    }
  },
  loading (state , payload ){
    state.loading = payload
  }
};
