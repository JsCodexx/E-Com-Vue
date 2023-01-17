<template>
  <section class="h-100 h-custom mt-3 mb-5" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body ">
              <div class="row">
                <div class="col-lg-7">
                  <h5 class="mb-3">
                    <router-link to="home" href="#!" class="text-body"
                      ><i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                      shopping</router-link
                    >
                  </h5>
                  <hr />
                  <div class="d-flex mb-3">
                    <div class="me-auto p-2"><h6>Thumbnail</h6></div>

                    <div class="me-auto p-2"><h6>Title</h6></div>
                    <div class="p-2"><h6>Quantity</h6></div>
                    <div class="p-2"><h6>Price</h6></div>
                    <div class="p-2"><h6>Remove</h6></div>
                  </div>
                  <div
                    v-for="item in cart"
                    :key="item.id"
                    class="d-flex mb-3 border border-dark-subtle"
                  >
                    <div class="me-auto p-2">
                      <img
                        :src="item.thumbnail"
                        class="img-fluid rounded-3"
                        alt="Shopping item"
                        style="width: 65px"
                      />
                    </div>

                    <div class="me-auto p-2">
                      <div class="ms-3">
                        <p>{{ item.title }}</p>
                        <!-- <p class="small mb-0">256GB, Navy Blue</p> -->
                      </div>
                    </div>
                    <div class="p-2">
                      <div style="width: 50px">
                        <h5 class="fw-normal mb-0">{{ item.quantity }}</h5>
                      </div>
                    </div>
                    <div class="p-2">
                      <div style="width: 80px">
                        <p class="mb-1">${{ item.price }}</p>
                      </div>
                    </div>
                    <button
                      @click.prevent="removeItem(item.id)"
                      class="fa fa-xmark "
                      title="Remove Product"
                    ></button>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="card bg-dark text-white rounded-3">
                    <div class="card-body">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                          mb-4
                        "
                      >
                        <h5 class="mb-0">Card details</h5>
                      </div>

                      <p class="small mb-2">Card type</p>
                      <a href="#!" type="submit" class="text-white"
                        ><i class="fab fa-cc-mastercard fa-2x me-2"></i
                      ></a>
                      <a href="#!" type="submit" class="text-white"
                        ><i class="fab fa-cc-visa fa-2x me-2"></i
                      ></a>
                      <a href="#!" type="submit" class="text-white"
                        ><i class="fab fa-cc-amex fa-2x me-2"></i
                      ></a>
                      <a href="#!" type="submit" class="text-white"
                        ><i class="fab fa-cc-paypal fa-2x"></i
                      ></a>

                      <form class="mt-4">
                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeName"
                            class="form-control form-control-lg"
                            siez="17"
                            placeholder="Cardholder's Name"
                          />
                          <label class="form-label" for="typeName"
                            >Cardholder's Name</label
                          >
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeText"
                            class="form-control form-control-lg"
                            siez="17"
                            placeholder="1234 5678 9012 3457"
                            minlength="19"
                            maxlength="19"
                          />
                          <label class="form-label" for="typeText"
                            >Card Number</label
                          >
                        </div>

                        <div class="row mb-4">
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input
                                type="text"
                                id="typeExp"
                                class="form-control form-control-lg"
                                placeholder="MM/YYYY"
                                size="7"
                                minlength="7"
                                maxlength="7"
                              />
                              <label class="form-label" for="typeExp"
                                >Expiration</label
                              >
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input
                                type="password"
                                id="typeText"
                                class="form-control form-control-lg"
                                placeholder="&#9679;&#9679;&#9679;"
                                size="1"
                                minlength="3"
                                maxlength="3"
                              />
                              <label class="form-label" for="typeText"
                                >Cvv</label
                              >
                            </div>
                          </div>
                        </div>
                      </form>

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2">${{ subTotal }}.00</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Shipping</p>
                        <p class="mb-2">$20.00</p>
                      </div>

                      <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Total(Incl. taxes)</p>
                        <p class="mb-2">${{ subTotal }}.00</p>
                      </div>

                      <button
                        @click="checkout"
                        type="button"
                        class="btn btn-info btn-block btn-lg btn-dark"
                      >
                        <div class="d-flex justify-content-between">
                          <span>${{ subTotal }}.00</span>
                          <span
                            >Checkout
                            <i class="fas fa-long-arrow-alt-right ms-2"></i
                          ></span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
      cartlen: '',
    };
  },
  mounted() {
    this.checkAuthentication();
  },
  methods: {
    removeItem(id) {
      //this function will send the id of product to be removed from the cart
      this.$store.dispatch('removeProduct', id);
    },
    checkAuthentication() {
      // checking authentication before adding item to the cart
      //checking if the token exist in local storage
      if (!this.$store.state.token) {
        this.$router.push('/login');
      }
    },
    checkout() {
      this.$swal.fire({
        title: 'Sucess!',
        text: 'Order Confirmed',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    },
  },
  computed: {
    cartLength() {
      console.log(this.$store.state.cart, 'sfdsdf');
      // return this.$store.state.cart.length;
    },
    cart() {
      return this.$store.state.cart;
    },
    subTotal() {
      //calculating the total price of all the items to be added
      let price = 0;
      this.$store.state.cart.forEach((item) => (price += item.price));
      return price;
    },
  },
};
</script>
<style scoped>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
  .remove-icon{
    overflow: hidden;
  }
  .card-body{
    padding-top: 0;
    padding-bottom:0;
    margin-bottom: 0;
  }
}
</style>

