<template>
  <div v-for="product in latestProducts" :key="product.id" class="product">
    <div class="imgbox">
      <img :src="`${product.thumbnail}`" />
    </div>
    <div class="details">
      <h2>
        Brand <br /><span>{{ product.title }}</span>
      </h2>
      <div class="price">{{ '$' + product.price }}</div>
      <label>Other Details</label>
      <ul>
        <li>Stocke {{ product.stock }}</li>
      </ul>
      <label>Colors</label>
      <ul class="colors">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button @click="getIds" @focus="productId = product.id">
        Add to Cart
      </button>
    </div>
  </div>
  <pagination
    :totalPages="12"
    :perPage="10"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  />
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
    limit: 9,
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
.product {
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 21.5rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: lightblue;
  font-family: sans-serif;
}
.imgbox img {
  width: 100%;
  display: block;
  margin: 20px auto 0;
}
.product .imgbox {
  height: 100%;
  box-sizing: border-box;
}
.details {
  position: absolute;
  width: 100%;
  bottom: -145px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: 0.5s;
}
.details h2 {
  margin: 0;
  padding: 0;
  font-size: 16px;
  width: 100%;
}
.details h2 span {
  font-size: 12px;
  color: #ccc;
  font-weight: normal;
}
.details .price {
  position: absolute;
  top: 10px;
  right: 20px;
  font-weight: bold;
  font-size: 20px;
}
label {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
}
ul li {
  list-style-type: none;
  margin: 5px 5px 0;
  font-size: 12px;
  font-weight: bold;
}
ul li:first-child {
  margin-left: 0;
}
ul.colors li {
  width: 16px;
  height: 16px;
}
ul.colors li:nth-child(1) {
  background-color: yellow;
}
ul.colors li:nth-child(2) {
  background-color: red;
}
ul.colors li:nth-child(3) {
  background-color: green;
}
ul.colors li:nth-child(4) {
  background-color: orange;
}
ul.colors li:nth-child(5) {
  background-color: lightblue;
}
button {
  display: block;
  padding: 5px;
  color: #fff;
  margin: 15px;
  background: #ff4faf;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}
button:hover {
  color: #000;
}
.product:hover .details {
  bottom: 0;
}
img {
  widows: 10rem;
  height: 8rem;
}

@media only screen and (max-width: 600px) {
  .tag2 {
    display: none;
  }
}
</style>