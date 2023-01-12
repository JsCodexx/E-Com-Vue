<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="row cart-wrapper">
            <div class="col-sm-8 col-md-8">
              <div class="cart-table-container">
                <table class="table table-cart">
                  <thead>
                    <tr class="">
                      <th class="thumbnail-col"></th>
                      <th class="product-col">Product</th>
                      <th class="price-col">Price</th>
                      <th class="qty-col">Quantity</th>
                      <th class="text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cart" :key="item.id" class="product-row">
                      <td>
                        <figure class="product-image-container">
                          <a href="#!" class="product-image">
                            <img
                              :src=" item.thumbnail "
                              alt="product"
                            />
                          </a>

                          <button @click.prevent="removeItem(item.id)"
                            class="btn-remove icon-cancel"
                            title="Remove Product"
                          ></button>
                        </figure>
                      </td>
                      <td class="product-col">
                        <h5 class="product-title">
                          <a>{{ item.title }}</a>
                        </h5>
                      </td>
                      <td>{{ item.price }}</td>
                      <td class="product-col">
                        <h5 class="product-title">
                          <a>{{ item.quantity }}</a>
                        </h5>
                      </td>
                      <td class="text-right">
                        <span class="subtotal-price"> {{ (item.price)-100 }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-sm-4 col-md-4">
              <div class="cart-summary">
                <h3>CART TOTALS</h3>

                <table class="table table-totals">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>$17.90</td>
                    </tr>

                    <tr>
                      <td colspan="2" class="text-left promo-code-area">
                        <h3>Promo Code</h3>

                        <div class="cart-discount">
                          <form action="#">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control form-control-sm"
                                placeholder="Coupon Code"
                                required=""
                              />
                              <div class="input-group-append">
                                <button
                                  class="btn apply-coupon-btn"
                                  type="submit"
                                >
                                  Apply Coupon
                                </button>
                              </div>
                            </div>
                            <!-- End .input-group -->
                          </form>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-shop btn-update-total"
                        >
                          Update Totals
                        </button>
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <td>Other charges</td>
                      <td>$17.90</td>
                    </tr>
                    <tr>
                      <td>Delivery charges</td>
                      <td>$17.90</td>
                    </tr>
                    <tr>
                      <td><b>Total</b></td>
                      <td><b>${{ subTotal }}.00</b></td>
                    </tr>
                  </tfoot>
                </table>

                <div class="checkout-methods">
                  <a href="#!" class="btn btn-block btn-dark"
                    >Proceed to Checkout <i class="fa fa-arrow-right"></i
                  ></a>
                </div>
              </div>
              <!-- End .cart-summary -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartData: '',
    
    };
  },
  mounted() {
    // this.getCart();
  },
  methods: {


    removeItem(id){
      console.log( ' id is', id)
      this.$store.dispatch('removeProduct' , id )
    }

  },
  computed: {
    cart() {
      console.log(this.$store.state.cart, 'imhere');
      return this.$store.state.cart;
    },
    subTotal(){
      let price = 0
      this.$store.state.cart.forEach(item => price += item.price)
      return price;
    }
  },
};
</script>
<style scoped>
.cart-table-container {
  margin-bottom: 2.5rem;
}

.cart-table-container .input-group .form-control {
  height: 1.2rem;
  border-color: rgba(0, 0, 0, 0.09);
}

.cart-table-container .btn-shop,
.cart-table-container .btn-sm {
  border: none;
  background-color: #f4f4f4;
  color: #222529;
}

.cart-table-container .btn-shop:hover,
.cart-table-container .btn-sm:hover {
  color: #fff;
  background-color: #08c;
}

.table.table-cart tr td,
.table.table-cart tr th,
.table.table-wishlist tr td,
.table.table-wishlist tr th {
  vertical-align: middle;
}

.table.table-cart tr th,
.table.table-wishlist tr th {
  border: 0;
  color: #222529;
  font-weight: 500;
  line-height: 2rem;
  font-size: 14px;
  text-transform: uppercase;
}

.table.table-cart tr td,
.table.table-wishlist tr td {
  border-top: 1px solid #e7e7e7;
}

.table.table-cart tr td.product-col,
.table.table-wishlist tr td.product-col {
  padding: 2rem 0.8rem 1.8rem 0;
}

.table.table-cart tr.product-action-row td,
.table.table-wishlist tr.product-action-row td {
  padding: 0 0 2.2rem;
  border: 0;
}

.table.table-cart .product-image-container,
.table.table-wishlist .product-image-container {
  position: relative;
  width: 8rem;
  margin: 0;
}

.table.table-cart .product-title,
.table.table-wishlist .product-title {
  margin-bottom: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  font-size: 16px;
}

.table.table-cart .product-title a,
.table.table-wishlist .product-title a {
  color: inherit;
  text-decoration: none;
}

.table.table-cart .subtotal-price,
.table.table-wishlist .subtotal-price {
  color: #222529;
  font-size: 1.6rem;
  font-weight: 600;
  font-size: 16px;
}

.table.table-cart .btn-remove,
.table.table-wishlist .btn-remove {
  right: 15px;
  font-size: 1.1rem;
}

.table.table-cart tfoot td,
.table.table-wishlist tfoot td {
  padding: 2rem 0.8rem 1rem;
}

.table.table-cart tfoot .btn,
.table.table-wishlist tfoot .btn {
  padding: 1.2rem 2.4rem 1.3rem 2.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  height: 2.688rem;
  letter-spacing: -0.018em;
  font-size: 14px;
  padding: 0px 25px;
}

.table.table-cart tfoot .btn + .btn,
.table.table-wishlist tfoot .btn + .btn {
  margin-left: 1rem;
}

.table.table-cart .bootstrap-touchspin.input-group,
.table.table-wishlist .bootstrap-touchspin.input-group {
  margin-right: auto;
  margin-left: auto;
}

.table.table-cart .product-title a,
.table.table-cart .subtotal-price {
  display: block;
  margin-bottom: 1px;
}

.table-cart tr th {
  padding: 1rem;
}

.table-cart tr th.thumbnail-col {
  width: 16%;
}

.table-cart tr th.product-col {
  width: 33%;
}

.table-cart tr th.price-col {
  width: 14%;
}

.table-cart td {
  padding: 1rem 1rem;
}

i.cart-empty {
  font-size: 100px;
  color: #d3d3d4;
}

.qty-col {
  min-width: 6.125rem;
}

tbody .product-col {
  font-size: 0;
}

.product-col .product-image-container {
  display: table-cell;
  padding-right: 1.8rem;
  margin-bottom: 0;
  vertical-align: middle;
}

.product-col .product-image img {
  border: 1px solid #ccc;
}

.product-col .product-title {
  margin-bottom: 1px;
  display: table-cell;
  vertical-align: middle;
}

.cart-discount {
  margin-bottom: 2rem;
}

.cart-discount h4 {
  margin-bottom: 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
}

.cart-discount form {
  max-width: 26.25rem;
}

.cart-discount .input-group-append {
  margin-left: 3px;
}

.cart-summary {
  margin-bottom: 1.6rem;
  padding: 1.5rem;
  border: 1px solid #e7e7e7;
  background: #fff;
}

.cart-summary h3 {
  margin-bottom: 10px;
  font-size: 16px;
  letter-spacing: -0.01em;
}

.product-image img {
  width: 6.25rem;
  height: 6.25rem;
}

.quantity-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.quantity-wrapper label {
  font-weight: 300;
  color: #666666;
  font-size: 15px;
  margin-bottom: 0;
}

.quantity-wrapper .input-group {
  width: 6.25rem;
  margin: 0 10px;
}

.quantity-wrapper input {
  width: 2rem !important;
  pointer-events: none;
  padding: 0;
  border: 0;
  text-align: center;
  margin-left: auto !important;
  position: initial !important;
}

.quantity-wrapper .input-group-btn {
  border: 1px solid #d5d5d5;
  border-radius: 50px !important;
  display: flex;
}

.quantity-wrapper .btn {
  padding: 0;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: none;
}

.quantity-wrapper .bx {
  font-size: 16px;
}

.promo-code-area h3 {
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
}

.apply-coupon-btn {
  background-color: #4f1fff;
  color: #fff;
}

.apply-coupon-btn:hover {
  color: #fff;
}

.cart-discount input {
  box-shadow: none !important;
  outline: none !important;
}

.table-totals tfoot tr td:last-child {
  text-align: right;
}

.checkout-methods {
  text-align: center;
}

.btn-remove {
  position: absolute;
  top: -10px;
  right: -8px;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  color: #474747;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 40%);
  text-align: center;
  line-height: 2rem;
}
.icon-cancel {
  text-decoration: none;
}
.icon-cancel:before {
  content: '';
  font-family: 'Font Awesome 5 Free';
  font-weight: 700;
}
</style>

