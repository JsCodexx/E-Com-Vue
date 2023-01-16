<template>
  <div
  style="overflow-x: hidden;"
    id="carouselExampleSlidesOnly h-50"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner h-25">
      <div class="carousel-item active h-75">
        <img
          
          class="d-block heroimage img-fluid"
          src="../../assets/Images/HomePage/slide1.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item h-75">
        <img
          class="d-block heroimage img-fluid"
          src="../../assets/Images/HomePage/slide2.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item h-75">
        <img
          class="d-block heroimage img-fluid"
          src="../../assets/Images/HomePage/slide3.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item h-75">
        <img
          class="d-block heroimage img-fluid"
          src="../../assets/Images/HomePage/slide4.jpg"
          alt="Third slide"
        />
      </div>
    </div>
  </div>
  <div>
    <div class="one">
      <h1>Featured Products</h1>
    </div>
    <shoping-card></shoping-card>
  </div>
</template>
<script>
import ShopingCard from '../../components/layout/ShopingCard.vue';
export default {
  name:'home',
  components:{
    ShopingCard,
  }
}
</script>


<style >
.card-shopping {
margin: 0 auto;
  /* margin-left: 16rem; */
  /* margin: 0; */
  /* box-sizing: border-box; */
  gap: 2rem;
  display: flex;
  justify-content: center;
  /* margin-top: 13rem; */
  flex-wrap: wrap;
  margin-bottom: 1rem;
  /* justify-content: space-between; */
  /* box-sizing: border-box; */
}
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
</style>