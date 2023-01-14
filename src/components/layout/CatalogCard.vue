<template>
  <!-- <div>
    <div class="row p-5">
      <div
        v-for="category in ProductCatagories"
        :key="category.id"
        class="col-12 col-sm-8 col-md-6 col-lg-3"
      >
        <div class="card m-2">
          <div class="img-wrapper">
            <img
              class="card-img img-fluid w-100 h-100"
              :src="`${this.prodcutImage}`"
              alt="Vans"
            />
          </div>
          <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
              <i class="fas fa-heart"></i>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ category }}</h4>

            <div class="buy d-flex justify-content-between align-items-center">
              <button
                class="btn btn-danger mt-3"
                data-abc="true"
                @click="getId"
                @focus="singleProducts = category"
              >
                <i ></i> View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="d-flex flex-wrap justify-content-center" style="background: salmon; margin-block: 5rem;">
    <div class="pack-section" v-for="category in ProductCatagories">
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
                @click="fetchProductId"
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
    //getting all categories names
    this.getProductsCatagories();
  },
  methods: {
    getProductsCatagories() {
      //getting all categories
      axios
        .get('https://dummyjson.com/products/categories')
        .then((response) => {
          this.ProductCatagories = response.data;
          this.getProductsByCatagories(this.ProductCatagories);
          this.getProducts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsByCatagories(cat) {
      for (let i = 0; i <= cat.length - 2; i++) {
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
    fetchProductId() {
      console.log(this.singleProducts);
      this.$router.push({
        name: 'SingleProduct',
        params: { productCata: this.singleProducts },
      });
    },

    getProducts() {
      // to get a sample image for the category
      const getProducts = axios
        .get('https://dummyjson.com/products')
        .then((response) => {
          this.prodcutImage = response.data.products[0].thumbnail;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped >
.pack-section {
  margin: 1rem 0;
}
.pack-info {
  padding: 1rem;
}
.category-div {
  /* margin-left: 9rem; */
  border-radius: 5px;
  background-color: rgb(215, 223, 223);
}
img {
  border-radius: 10px;
}
</style>