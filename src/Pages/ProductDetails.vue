<template>
  <keep-alive>
    <div class="card-shopping">
      <div class="row no-gutters related-info">
        <div class="col-md-4 no-gutters">
          <div class="one">
            <h1>Click to Buy</h1>
          </div>
          <div
            class="d-flex justify-content-center container product-container"
          >
            <div class="card p-3 bg-white">
              <i class="fa-thin fa-tag"></i>  
                <img
                  :src="`${product.thumbnail}`"
                />
              <div>
                <h4>{{product.title}}</h4>
                <h6 class="mt-0 text-black-50">{{product.title}}</h6>
              </div>
              <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price">
                  <span>Brand</span><span>{{product.brand}}</span>
                </div>
                <div class="d-flex justify-content-between p-price">
                  <span>Total Stock</span><span>{{ product.stock }}</span>
                </div>
                <div class="d-flex justify-content-between p-price">
                  <span>Catagories</span><span>{{ product.category }}</span>
                </div>
                <div
                  class="
                    d-flex
                    justify-content-between
                    total
                    font-weight-bold
                    mt-4
                  "
                >
                  <span>Total</span><span>${{product.price}}</span>
                </div>
              </div>
              <button
              @click.prevent="addCart"
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                @focus=""
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 no-gutters related-info">
        <div class="d-flex justify-content-center product-container">
          <div class="one">
            <h1>Product Detail And Reviews</h1>
          </div>
        </div>
        <div class="container detail-and-reviews flex-wrap">
          <ul class="reviews__header">
            <h4 class="reviews__heading">Details</h4>
            <li>100% Quality</li>
            <li>Free Shipping</li>
            <li>Easy Returns</li>
            <li>12 Months Warranty</li>
            <li>EMI Starting from (On Credit Cards)</li>
            <li>Normal Delivery : 4-5 Days</li>
            <li>Express Delivery : 2-3 Days</li>
            <li>COD Available (All Over Lahore)</li>
          </ul>
          <main class="reviews">
            <div class="reviews__header">
              <h4 class="reviews__heading">Customer reviews</h4>

              <div class="reviews__ratings row ai-c jc-c">
                <span class="reviews__ratings-stars row ai-c">
                  <span class="fa fa-star bg-warning"></span>
                  <span class="fa fa-star bg-warning"></span>
                  <span class="fa fa-star bg-warning"></span>
                  <span class="fa fa-star bg-warning"></span>
                  <span class="fa-solid fa-star-half-stroke bg-warning"></span>
                </span>
                <span class="reviews__ratings-score"></span><span>{{ product.rating }} out of 5</span>
              </div>
              <p class="reviews__ratings-total">40 customer ratings</p>
            </div>

            <table class="reviews__table">
              <tbody>
                <tr class="reviews__table-row">
                  <td>5 star</td>
                  <td class="reviews__meter">
                    <div class="reviews__meter-bar" style="width: 84%"></div>
                  </td>
                  <td>84%</td>
                </tr>
                <!-- tr -->
                <tr class="reviews__table-row">
                  <td>4 star</td>
                  <td class="reviews__meter">
                    <div class="reviews__meter-bar" style="width: 9%"></div>
                  </td>
                  <td>9%</td>
                </tr>
                <!-- tr -->
                <tr class="reviews__table-row">
                  <td>3 star</td>
                  <td class="reviews__meter">
                    <div class="reviews__meter-bar" style="width: 4%"></div>
                  </td>
                  <td>4%</td>
                </tr>
                <!-- tr -->
                <tr class="reviews__table-row">
                  <td>2 star</td>
                  <td class="reviews__meter">
                    <div class="reviews__meter-bar" style="width: 2%"></div>
                  </td>
                  <td>2%</td>
                </tr>
                <!-- tr -->
                <tr class="reviews__table-row">
                  <td>1 star</td>
                  <td class="reviews__meter">
                    <div class="reviews__meter-bar" style="width: 1%"></div>
                  </td>
                  <td>1%</td>
                </tr>
              </tbody>
            </table>

            <a href="#" class="link">How do we calculate ratings?</a>
          </main>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
  

<script>
import axios from 'axios';
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {},
      productId: '',
    };
  },
  created() {
    // to store the latest route in productId
    this.productId= this.$route.params.id
  },
  mounted(){
    this.getProduct();
  },
  methods: {
    getProduct (){
        axios
        .get(`https://dummyjson.com/products/${this.productId}`)
        .then((response)=>{
            this.product=response.data;
        
        })
        .catch((error)=>{
            console.log(error)
        });
    },
    addCart(){
      
    }
  },
};
</script>
  
  <style scoped>
.card-shopping {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  margin-top: 5rem;
}
.card {
  width: 600px;
  height: auto;
}


.related-info {
  justify-content: center;
  border: 5px solid white;
  box-shadow: -1px 5px 15px black;
  margin-top: 10px;
  width: 100%;
}

/* === BASE HEADING === */

h1 {
  position: relative;
  padding: 0;
  margin: 0;
  /* font-family: "Raleway, sans-serif; */
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}

h1 em {
  font-style: normal;
  font-weight: 600;
}




/* === HEADING STYLE #1 === */
.one {
  padding-top: 5rem;
}

.one h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
}

.one h1:before {
  width: 28px;
  height: 5px;
  display: block;
  content: '';
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -14px;
  background-color: #b80000;
}

.one h1:after {
  width: 100px;
  height: 1px;
  display: block;
  content: '';
  position: relative;
  margin-top: 25px;
  left: 50%;
  margin-left: -50px;
  background-color: #b80000;
}

/* rating */

:root {
  --prime-color: #ffcc48;
}

/* flexbox */

.row {
  display: flex;
}

.row.ai-c {
  align-items: center;
}

.row.jc-c {
  justify-content: center;
}

/* Review */
.detail-and-reviews {
  display: flex;
  justify-content: space-between;
}
.reviews {
  width: 30%;
  /* padding: 6rem; */
  text-align: center;
  /* border: 5px solid #ccc;
  border-radius: 14px; */
  justify-content: right;
}
.product-details {
    width: 30%;
  padding: 6rem;
  border: 5px solid #ccc;
  border-radius: 14px;
}

.reviews__header {
  margin-block-end: 4rem;
}

.reviews__heading {
  font-size: 2.4rem;
  font-weight: 600;
}

.reviews__ratings {
  /* width: 140%; */
  padding: 1.25rem 2rem;
  margin-inline: auto;
  margin-block: 2rem 1rem;
  border-radius: 25rem;
  /* background-color: #f5f8ff; */
  justify-content: left;
}

.reviews__ratings-stars {
  margin-inline-end: 1rem;
}

.reviews__ratings-stars .star {
  font-size: 2.5rem;
  color: var(--prime-color);
}

.reviews__ratings-total {
  opacity: 0.75;
}

/* table */

.reviews__table {
  /* width: 100%; */
  margin-block-end: 1rem;
  border-collapse: separate;
  border-spacing: 1rem 2rem;
  white-space: nowrap;
  vertical-align: middle;
}

.reviews__table td:first-of-type {
  /* color: #2a5bda; */
  text-align: right;
}

.reviews__table td:last-of-type {
  text-align-last: left;
}

.reviews__meter {
  width: 80%;
  height: 1.5rem;
  background-color: #f3fbfb;
  border-radius: 32px;
  overflow: hidden;
}

.reviews__meter-bar {
  height: 100%;
  background-color: var(--prime-color);
}

/* ------- */

.link {
  color: #2a5bda;
  font-size: 1.4rem;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
.related-pics {
  margin: 1rem;
  border: 2px solid #ccc;
}

@media only screen and (max-width: 600px) {
  .related-pics {
    display: none;
  }
}
</style>

