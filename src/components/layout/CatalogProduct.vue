<template>
  <section class="products-wrapper">
    <div>
      <div class="row p-5">
        <div
          class="col-12 col-sm-8 col-md-6 col-lg-3"
          v-for="product in latestProducts"
          :key="product.id"
        >
          <div class="card m-2">
            <div class="img-wrapper">
              <img
                class="card-img img-fluid w-100 h-100 zoom"
                :src="product.thumbnail"
                alt="Vans"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ product.title }}</h4>
              <h6 class="card-subtitle mb-2 text-muted">{{ product.brand }}</h6>

              <div
                class="buy d-flex justify-content-between align-items-center"
              >
                <div class="price text-success">
                  <h5 class="mt-4">Starting From ${{ product.price }}</h5>
                </div>
                <!-- on focus storing id of specific id of product and sending it as a params in the function -->
              </div>
              <router-link
                :to="{ name: 'ProductDetails', params: { id: product.id } }"
              >
                <button
                  class="btn btn-danger mt-3"
                  @focus="productid = product.id"
                >
                  View Details
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';
import FooterComponent from './FooterComponent.vue';

export default {
  components: { FooterComponent },
  data: () => ({
    show: false,
    latestProducts: [],
    productid: null,
    showModal: false,
    productCategory: null,
  }),
  mounted() {
    this.getLatestProducts();
  },
  created() {
    this.productCategory = this.$route.params.productCata;
  },
  methods: {
    getLatestProducts() {
      this.$store.commit('loading', true);

      const alpha = axios
        .get(`https://dummyjson.com/products/category/${this.productCategory}`)
        .then((response) => {
          this.latestProducts = response.data.products;
          this.$store.commit('loading', false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
</style>