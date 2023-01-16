<template>
    <div class="one">
      <h1>Searched Results</h1>
    </div>
  <section class="products-wrapper">
    
    <div>
      <div class="row p-5">
        <div
          class="col-12 col-sm-8 col-md-6 col-lg-3"
          v-for="product in searchedProducts"
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
              <button
                class="btn btn-danger mt-3"
                @click="getProductId"
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
</template>


<script>
import axios from 'axios';
import { getSearchProducts } from '../AllServices/APIServices';

export default {
  name: 'SearchProducts',

  data: () => ({
    searchText: '',
    searchedProducts: [],
    productId: null,
  }),
  // created() {
  //   console.log(this.searchedValue)
  //   this.searchedValue();
  // },
  mounted() {
    this.getSearchProducts();
  },
  computed: {
    searchedValue() {
      //returning the searched value
      return (this.searchText = this.$route.params.id);
    },
  },
  methods: {
    getSearchProducts() {
      //call from api services
      getSearchProducts(this.searchedValue)
    
        .then((response) => {
          this.searchedProducts = response.data.products;
          console.log(this.searchedProducts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductId() {
      console.log(this.searchedProducts.id, this.productId);
      this.$router.push({
        name: 'ProductDetails',
        params: { id: this.productId },
      });
    },
  },
};
</script>
<style scoped>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);
.products-wrapper {
  /* display: flex; */
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.img-wrapper {
  height: 20rem;
}
.zoom {
  padding: 50px;

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
</style>