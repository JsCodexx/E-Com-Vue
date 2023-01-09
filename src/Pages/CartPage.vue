<template>
  <div id="wrap">
    <div id="cart_layout_1">
      <div class="one">
        <h1>Click to checkout</h1>
      </div>
      <div class="cart_info">
        <div class="product">
          <img src="../assets/Images/HomePage/catagoriess.jpg" />
        </div>
        <div class="product_info">
          <div class="center">
            <h3>watches</h3>
          </div>
        </div>
      </div>
      <div class="complete_cart">
        <div class="checkout">
          <div class="total">
            <h2>Subtotal:</h2>
          </div>
          <span class="subtotal"> $24.99 </span>
          <div class="bfb">
            <button
              class="btn btn-outline-success my-2 my-sm-0 nav-links"
              type="submit "
              @click.prevent="chekoutToShip"
            >
              checkout
            </button>
          </div>
        </div>
        <div class="updated mobile"></div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ShoppingCart',
};
</script>
<style scoped>
h1,
h3 {
  font-weight: 500;
}
img {
  max-width: 100%;
}
#wrap {
  width: 80%;
  margin: 20px auto;
}
#cart_layout_1 {
  color: #808080;
}
/*  */
#cart_layout_1 .cart_info {
  border-top: 2px solid #ccc;
  /* width: 100%; */
  height: 270px;
  max-height: 300px;

}
#cart_layout_1 .cart_info .product {
  display: block;
  float: left;
  width: 30%;
  padding-top: 1rem;
}
#cart_layout_1 .cart_info .product img {
  max-height: 270px;
}
#cart_layout_1 .cart_info .product_info {
  display: block;
  float: left;
  /* width: 10%; */
  margin-left: 5%;
  height: auto;
  /* margin-bottom: 2rem; */
}

#cart_layout_1 .complete_cart .checkout .total {
  width: 50%;
  float: left;
  
  /* text-align: center; */
}
#cart_layout_1 .complete_cart .checkout h2 {
  display: inline-block;
  font-size: 2.5em;
  font-weight: 500;

}

#cart_layout_1 .complete_cart .subtotal {
  font-size: 3em;
  width: 40%;
  float: left;
  text-align: right;
}
#cart_layout_1 .complete_cart .bfb {
  width: 100%;
  float: left;
  position: relative;
}
#cart_layout_1 .mobile {
  display: none;
}

@media (max-width: 800px) {
  #cart_layout_1 .complete_cart .updated {
    width: 65%;
  }
  #cart_layout_1 .complete_cart .checkout {
    width: 35%;
  }
}
@media (max-width: 600px) {
  #cart_layout_1 .cart_info .product {
    width: 100%;
  }
  #cart_layout_1 .updated {
    display: none;
  }
}
#cart_layout_1 .mobile {
  display: block;
}
#cart_layout_1 .cart_info {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
}
#cart_layout_1 .cart_info .product_info {
  width: 100%;
  margin-left: 0;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
}
#cart_layout_1 .cart_info .product_info span {
  display: inline-block;
  margin: 5px;
}

#cart_layout_1 .cart_info .details {
  width: 100%;
  margin: 0;
}

#cart_layout_1 .cart_info .details .price {
  width: 50%;
  text-align: center;
}

#cart_layout_1 .complete_cart .checkout {
  width: 100%;
}

#cart_layout_1 .complete_cart .updated .coupon h2 {
  width: 100%;
}

#cart_layout_1 .complete_cart .bfb .button {
  width: 100%;
  position: initial;
  float: left;
}
h1 {
  position: relative;
  padding: 0;
  margin: 0;
  /* font-family: "Raleway, sans-serif; */
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}

h1 em {
  font-style: normal;
  font-weight: 600;
}

/* === HEADING STYLE #1 === */
.one {
  padding-top: 5rem;
}

.one h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
}

.one h1:before {
  width: 28px;
  height: 5px;
  display: block;
  content: '';
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -14px;
  background-color: #b80000;
}

.one h1:after {
  width: 100px;
  height: 1px;
  display: block;
  content: '';
  position: relative;
  margin-top: 25px;
  left: 50%;
  margin-left: -50px;
  background-color: #b80000;
}
</style>

