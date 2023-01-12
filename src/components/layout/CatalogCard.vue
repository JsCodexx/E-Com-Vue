<template>
  <div class="d-flex flex-wrap mt-10 conatiner">
    <div class="pack-section d-flex" v-for="category in ProductCatagories">
      <ul class="pack-grig">
        <li>
          <div class="pack-box category-div">
            <img :src="`${this.prodcutImage}`" alt="" />
            <div class="pack-info">
              <h3>{{ category }}</h3>
              <p>The time you want to escape</p>
              <button
                class="btn btn-outline-success btn-sm"
                data-abc="true"
                @click="getId"
                @focus="singleProducts = category"
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
    singleProducts: null,
    ProductbyCatagories: [],
    ProductCatagories: [],
    prodcutImage: '',
  }),
  mounted() {
    this.getProductsCatagories();
  },
  methods: {
    getProductsCatagories() { 
        axios
        .get('https://dummyjson.com/products/categories')
        .then((response) => {
          this.ProductCatagories = response.data;
          this.getProductsByCatagories(this.ProductCatagories);
          this.getProducts()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsByCatagories(cat) {
      // console.log(cat);
      for (let i = 0; i <= cat.length - 2; i++) {
        // console.log(cat);

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
    getId() {
      // this.productid = this.latestProducts.id;
      this.$router.push({
        name: 'SingleProduct',
        params: { productCata: this.singleProducts },
      });
    },
    getProducts() {
      const getProducts = axios
        .get('https://dummyjson.com/products')
        .then((response) => {
          this.prodcutImage = response.data.products[0].thumbnail 
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped >
.container {
  justify-content: space-around;
}
.category-div {
  margin-left: 9rem;
  border-radius: 5px;
  background-color: rgb(215, 223, 223);
}
img {
  border-radius: 10px;
}
</style>