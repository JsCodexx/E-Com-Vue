<template>
  <div>
    <form class="form-page">
      <div class="form-group">
        <label for="exampleFormControlInput1">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Product Name"
          v-model="newProduct.title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput2">Product Stock</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Product Quantity"
          v-model="newProduct.stock"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput3">Product Price</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Product Price"
          v-model="newProduct.price"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Product Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="newProduct.description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Image</label>
        <input
          type="url"
          class="form-control"
          id="exampleFormControlFile1"
          v-model="newProduct.thumbnail"
        />
      </div>
      <router-link to="/home">
        <button type="submit" class="btn btn-dark" @click="addNewProduct">
          Add Product
        </button>
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'addProducts',
  data() {
    return {
      newProduct: {
        title: null,
        stock: null,
        price: null,
        description: null,
        thumbnail: null,
        latestProduct: {},
      },
    };
  },
  methods: {
    // getLatestProducts() {},
    addNewProduct() {
      const alpha = axios.post('https://dummyjson.com/products/add', {
        title: this.newProduct.title,
        price: this.newProduct.price,
        thumbnail: this.newProduct.thumbnail,
        stock: this.newProduct.stock,
      });
      this.latestProduct = alpha.data;
      alert(this.latestProduct);
      console.log(this.latestProduct);
    },
  },
};
</script>


<style scoped>
.form-page {
  padding-top: 1rem;
  padding-bottom: 4rem;
  margin: 1rem;
}
</style>