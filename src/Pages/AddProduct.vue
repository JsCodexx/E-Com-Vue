<template>
  <div class="wrapper">
    <form class="needs-validation border-2" novalidate>
      <div class="col-md-12 mb-3">
        <label for="validationTooltip01">Product Title</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip01"
          placeholder="Product Name"
          required
          v-model="newProduct.title"
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-12 mb-3">
        <label for="validationTooltip02">Quantity</label>
        <input
          type="number"
          class="form-control"
          id="validationTooltip02"
          placeholder="Product Stock"
          required
          v-model="newProduct.stock"
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-12 mb-3">
        <label for="validationTooltip01">Product Brand</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip01"
          placeholder="Product Brand"
          required
          v-model="newProduct.Brand"
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-12 mb-3">
        <label for="validationTooltip01">Product Price</label>
        <input
          type="number"
          class="form-control"
          id="validationTooltip01"
          placeholder="Product Price"
          required
          min="5"
          v-model="newProduct.price"
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-12 mb-3">
        <label for="validationTooltip01">Product Description</label>
        <textarea
          type="text"
          class="form-control"
          rows="3"
          id="validationTooltip01"
          placeholder="Product Description"
          required
          v-model="newProduct.description"
        ></textarea>
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="form-group col-md-12 mb-3">
        <label for="validationTooltip01">Image</label>
        <input
          type="url"
          class="form-control"
          id="validationTooltip01"
          v-model="newProduct.thumbnail"
        />
      </div>
      <router-link to="/home">
        <button
          @click="addNewProduct"
          class="btn bg-dark text-light"
          type="submit"
        >
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
        title: 'Leather Shoe',
        stock: 12,
        price: 3000,
        brand: 'Charcol',
        description: 'this is a pure leather shoe',
        thumbnail: null,
      },
      newAddedProduct: [],
    };
  },
  methods: {
    // getLatestProducts() {},
    addNewProduct(newProduct) {
      const alpha = axios
        .post('https://dummyjson.com/products/add', {
          title: this.newProduct.title,
          price: this.newProduct.price,
          thumbnail: this.newProduct.thumbnail,
          brand: this.newProduct.brand,
          stock: this.newProduct.stock,
        })
        .then((response) => {
          this.newAddedProduct.push(alpha.data);
          this.$swal.fire({
            position:'top-end',
            title: 'SucessFull!',
            text: 'The Product is Added',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        });
    },
  },
};
</script>


<style>
.wrapper {
  margin-top: 4.5rem;
  margin-bottom: 1rem;
  /* justify-content: center; */
}
</style>