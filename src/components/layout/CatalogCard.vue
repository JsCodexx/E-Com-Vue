<template>
  <div>
    <div class="row p-5 mt-5">
      <div
        v-for="category in ProductCatagories"
        :key="category.id"
        class="col-12 col-sm-8 col-md-6 col-lg-3"
      >
        <div class="card m-2">
          <div class="img-wrapper">
            <img
              class="card-img img-fluid w-100 h-100"
              :src="prodcutImage"
              alt="Vans"
            />
          </div>
          <!-- <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
              <i class="fas fa-heart"></i>
            </a>
          </div> -->
          <div class="card-body">
            <h4 class="card-title">{{ category }}</h4>

            <div class="buy d-flex justify-content-between align-items-center">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { getProductsByCatagories } from '../../AllServices/APIServices';
import { getProductsCatagories } from '../../AllServices/APIServices';
import { getProducts } from '../../AllServices/APIServices';


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
      axios;
      getProductsCatagories()
        .then((response) => {
          this.ProductCatagories = response.data;
          this.getProductsByCatagories(this.ProductCatagories);
          this.getProducts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsByCatagories(products) {
      //this method will get the products of the same category
      for (let i = 0; i <= products.length - 2; i++) {
        const ProductsByCatagories = axios;
        getProductsByCatagories(products)
          .then((response) => {
            //storing the result in an array
            this.ProductbyCatagories.push(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetchProductId() {
      //on click this function will go to singleProduct page with the specific id of the clicked product
      this.$router.push({
        name: 'SingleProduct',
        params: { productCata: this.singleProducts },
      });
    },
      // to get a sample image for the category

    getProducts() {
      //api call from service page
        getProducts()
        .then((response) => {
          console.log(response.data.products[1].thumbnail);
          this.prodcutImage = response.data.products[1].thumbnail;
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