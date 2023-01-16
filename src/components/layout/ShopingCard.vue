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
            <div class=" img-wrapper">
              <img
                class="card-img img-fluid w-100 h-100 zoom"
                :src="product.thumbnail"
                alt="Vans"
              />
            </div>
            <hr class="border-2">
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
              <button
                class="btn btn-danger mt-3"
                @click="fetchProductId"
                @focus="productId = product.id"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- defining the card and defining all the necessay data for the pages  -->
  <pagination-card
    class="wrapper"
    :totalPages="12"
    :perPage="12"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  />
</template>

<script scoped>
import axios from 'axios';
import PaginationCard from './PaginationCard.vue';
import { getLatestProducts } from '../../AllServices/APIServices';

export default {
  components: { PaginationCard },
  data: () => ({
    show: false,
    latestProducts: [],
    productId: null,
    currentPage: 1,
    limit: 12,
    skip: 0,
  }),

  methods: {
      //fetching api from the user service directory

    getLatestProducts() {

      //this is to load the loader
      this.$store.commit('loading', true);

      getLatestProducts(this.limit, this.skip)
        .then((response) => {
          this.latestProducts = response.data.products;
          this.$store.commit('loading', false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchProductId() {
      console.log('this is the id');
      //  this will push to the Detail Page with id of specific product
      this.$router.push({
        name: 'ProductDetails',
        params: { id: this.productId },
      });
    },
    //function will run on the change of the page
    onPageChange(page) {
      this.currentPage = page;
      if (page) {
        //this will calculate the skip number for the page
        this.skip = this.limit * (page - 1);
      }
      this.getLatestProducts();
    },
  },

  created() {
    this.getLatestProducts();
  },
};
</script>


<style>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);
.wrapper {
  width: 75%;
}
.products-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.img-wrapper {
  height: 20rem;
}
.zoom {
  padding: 55px;

  transition: transform 0.5s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
}
.polaroid {
  /* width: 250px; */
  box-shadow: 8px 0 0 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
</style>