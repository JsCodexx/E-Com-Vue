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
  initilization(state) {
    if (localStorage.getItem('token')) {
      state.token = localStorage.getItem('token');
      state.isAuthenticated = true;
    } else {
      state.token = '';
      state.isAuthenticated = false;
    }
  },
  setToken(state, token) {
    state.token = token;
    state.isAuthenticated = true;
  },
  // removing token from Store and updating Auth Status
  removeToken(state) {
    state.token = '';
    state.isAuthenticated = false;
  },
};

// export default {
//     initializeStore(state) {
//       if (localStorage.getItem('cart')) {
//         state.cart = JSON.parse(localStorage.getItem('cart'));
//       } else {
//         localStorage.setItem('cart', JSON.stringify(state.cart));
//       }
//     },
//     addToCart(state, item) {
//       const exists = state.cart.items.filter((i) => i.id === item.id);

//       const exists2 = state.cart.items.filter((i) => i.product === item.product);
//       if (exists.length > 0) {
//         exists[0].quantity =
//           parseInt(exists[0].quantity) + parseInt(item.quantity);
//       } else {
//         state.cart.items.push(item);
//         console.log('🚀 ~ file: mutations.js:16 ~ addToCart ~ itemssssss', item);
//       }
//       // console.log(
//       //   '🚀 ~ file: mutations.js:25 ~ addToCart ~ state.cart',
//       //   state.cart
//       // );

//       localStorage.setItem('cart', JSON.stringify(state.cart));
//     },
//     cartLengthDecrease(state, item) {
//       const exists = state.cart.items.filter((i) => i.id === item.id);
//       if (exists.length > 0) {
//         exists[0].quantity =
//           parseInt(exists[0].quantity) - parseInt(item.quantity);
//       }
//       // console.log(
//       //   '🚀 ~ file: mutations.js:25 ~ addToCart ~ state.cart',
//       //   state.cart
//       // );

//       localStorage.setItem('cart', JSON.stringify(state.cart));
//     },
//     newProduct(state, payload) {
//       state.newProduct = payload.value;
//       console.log(
//         '🚀 ~ file: mutations.js:45 ~ newProduct ~ payload.value',
//         state.newProduct
//       );
//       localStorage.setItem('New Product', JSON.stringify(state.newProduct));
//     },
//     cartLengthUpdate(state, payload) {
//       state.cartLength = payload.value;
//       console.log(
//         '🚀 ~ file: mutations.js:50 ~ cartLengthUpdate ~ state.cartLength',
//         state.cartLength
//       );
//     },
//   };
