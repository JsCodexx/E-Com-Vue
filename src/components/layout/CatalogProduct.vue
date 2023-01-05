<template>
  <div class="products">
    <div class="d-flex flex-wrap product-container">
      <div
        v-for="product in latestProducts"
        :key="product.id"
        class="card text-white bg-dark col-md-2 col-10 mt-3 single-product"
      >
        <img class="mx-auto" :src="`${product.thumbnail}`" />
        <div class="card-body text-center mx-auto">
          <div class="cvp">
            <h5 class="card-title font-weight-bold">{{product.title  }}</h5>
            <p class="card-text">{{ '$' + product.price }}</p>
            <router-link :to="{name:'ProductDetails' , params:{id:product.id}}"> <button
              class="btn btn-dark text-uppercase details-bbtn"
              @click="getIds"
              @focus="productid = product.id"
            >
              View Details</button
            ></router-link>
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
import FooterCard from './FooterCard.vue';

export default {
  components: { FooterCard },
  data: () => ({
    show: false,
    latestProducts: [],
    productid: null,
    showModal: false,
    prodCata: null,
  }),
  mounted() {
    this.getLatestProducts();
  },
  created() {
    this.prodCata = this.$route.params.productCata;
  },
  methods: {
    getLatestProducts() {
      const alpha = axios
        .get(`https://dummyjson.com/products/category/${this.prodCata}`)
        .then((response) => {
          this.latestProducts = response.data.products;
          console.log(response.data.products);
        })
        .catch((error) => {
          console.log(error);
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