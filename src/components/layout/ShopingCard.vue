<template>
  <section class="products-wrapper">

    <div>
      <div class="row p-5">
        <div class="col-12 col-sm-8 col-md-6 col-lg-3" v-for="product in latestProducts" :key="product.id">
          <div class="card m-2">
            <div class="img-wrapper">
              <img class="card-img img-fluid w-100 h-100" :src="product.thumbnail" alt="Vans" />
            </div>
            <div class="card-img-overlay d-flex justify-content-end">
              <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ product.title }}</h4>
              <h6 class="card-subtitle mb-2 text-muted">{{ product.brand }}</h6>
              <!-- <p class="card-text">
                {{ product.description }}
              </p> -->
              <div
                class="buy d-flex justify-content-between align-items-center"
              >
                <div class="price text-success">
                  <h5 class="mt-4">${{ product.price }}</h5>
                </div>
                <a href="#" class="btn btn-danger mt-3"
                  ><i class="fas fa-shopping-cart"></i> Add to Cart</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <pagination-card
    :totalPages="12"
    :perPage="10"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  /> -->
</template>

<script scoped>
import axios from 'axios';
import PaginationCard from './PaginationCard.vue';

export default {
  components: { PaginationCard },
  data: () => ({
    show: false,
    latestProducts: [],
    productId: null,
    currentPage: 1,
    limit: 10,
    skip: 0,
  }),
  mounted() {
    this.getLatestProducts();
  },
  methods: {
    getLatestProducts() {
      const alpha = axios
        .get(
          `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`
        )
        .then((response) => {
          this.latestProducts = response.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getIds() {
      console.log(this.latestProducts.id, this.productId);
      this.$router.push({
        name: 'ProductDetails',
        params: { id: this.productId },
      });
    },
  },
  onPageChange(page) {
    this.currentPage = page;
    if (page) {
      this.skip = this.limit * (page - 1);
    }
    this.getLatestProducts();
  },
};
</script>


<style scoped>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);
.products-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.img-wrapper{
  height: 20rem;
}
</style>