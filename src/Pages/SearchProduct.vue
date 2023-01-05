<template>
  <div class="products">
    <div class="d-flex flex-wrap product-container">
      <div
        v-for="product in searchedProducts"
        :key="product"
        class="card text-white bg-dark col-md-2 col-10 mt-3 single-product"
      >
        <img class="mx-auto" :src="`${product.thumbnail}`" />
        <div class="card-body text-center mx-auto">
          <div class="cvp">
            <h5 class="card-title font-weight-bold">{{ product.title }}</h5>
            <p class="card-text">{{ '$' + product.price }}</p>
            <button @click.prevent="getProductId"
            @focus="productId = product.id"
              class="btn btn-dark text-uppercase details-bbtn"
            >
              View Details
            </button>
            <br />
            <a href="#" class="btn cart px-auto fa-solid fa-cart-shopping"
              >ADD TO CART</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'SearchProducts',

  data: () => ({
    searchText: '',
    searchedProducts: [],
    productId:null,
  }),
  mounted() {
    this.getsearchProducts();
  },
  methods: {
    getsearchProducts() {
      const alpha = axios
        .get(
          `https://dummyjson.com/products/search?q=${(this.searchText =
            this.$route.params.id)}`
        )
        .then((response) => {
          this.searchedProducts = response.data.products;
          console.log(this.searchedProducts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductId() {
      // this.productid = this.latestProducts.id;
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
img {
  width: 12.5rem;
  aspect-ratio: 1/1;
}
.products {
  margin-top: 5rem;
  border: 2px solid #ccc;
}
.single-product {
  border: 2px solid #ccc;
  justify-content: space-between;
}
.product-container {
  justify-content: space-evenly;
}
</style>