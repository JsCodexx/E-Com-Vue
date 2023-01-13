export default {
  addToCart(state, { id, stock, title, thumbnail, price, quantity }) {
    // console.log(state.cart.product.id)
    // let productInCart = state.cart.find((item) => {
    //   return item.id === id;
    // });
    // if (productInCart) {
    //   productInCart.quantity += 1;
    // }
    state.cart.push({
      stock,
      title,
      thumbnail,
      price,
      quantity,
      id,
    });
    // console.log(state,'mutation');
  },
  removeProcut(state, id) {
    state.cart = state.cart.filter((cartProducts) => cartProducts.id != id);
  },
  checkAuth(state, userToken) {},

  // removing token from Store and updating Auth Status
  // removeToken(state) {
  //   state.token = '';
  //   state.isAuthenticated = false;
  // },
  userDetail(state, user) {
    console.log(user, 'i am user');
    state.userDetails = user;
    const token = localStorage.getItem('token');
    console.log(token);

    if ((state.userDetails.token = token)) {
      console.log('i am true');
      state.token = token;
      state.isAuthenticated = true;
    } else {
      console.log('i am false');
      // state.token = '';
      state.isAuthenticated = false;
    }

    // console.log(state.userDetails , 'passing user to state')
  },
};
