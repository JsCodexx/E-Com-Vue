<template>
  <div class="d-flex flex-wrap mt-10">
  <div class="pack-section d-flex " v-for='category in ProductCatagories'>
    <ul class="pack-grig">
      <li>
        <div class="pack-box">
          <img src="../../assets/Images/HomePage/catagories (1).jpg" alt="">
          <div class="pack-info">
            <h3>{{ category }}</h3>
            <p>The time you want to escape</p>
            <button
              class="btn btn-outline-success btn-sm"
              data-abc="true"
              @click="getPCat"
              @focus="productCat = category"
            >
              View Products
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data: () => ({
    productCat: null,
    ProductbyCatagories: [],
    ProductCatagories: [],
  }),
  mounted() {
    this.getProductsCatagories();
  },
  methods: {
    getProductsCatagories() {
      const ProductsCatagories = axios
        .get('https://dummyjson.com/products/categories')
        .then((response) => {
          this.ProductCatagories = response.data;
          this.getProductsByCatagories(this.ProductCatagories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsByCatagories(cat) {
      console.log(cat);
      for (let i = 0; i <= cat.length - 2; i++) {
        console.log(cat);

        const ProductsByCatagories = axios
          .get(`https://dummyjson.com/products/category/${cat[i]}`)
          .then((response) => {
            this.ProductbyCatagories.push(response.data);

          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getPCat() {
      // this.productid = this.latestProducts.id;
      this.$router.push({
        name: 'CatagoriesProduct',
        params: { productCata: this.productCat },
      });
    },
  },
};
</script>