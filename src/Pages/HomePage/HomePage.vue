<template>
  <div id="carouselExampleCaptions" class="carousel slide carou" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleCaptions"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/Images/HomePage/slide1.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-primar">BUY FOR YOURSELF</h5>
          <p>Every Thing Is Just A Click Away</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/Images/HomePage/slide2.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>WE CARE ABOUT YOU</h5>
          <p>The Feel You Deserve</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/Images/HomePage/slide2.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>SALE IS ON</h5>
          <p>Let's Have A Look</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
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
  name: 'home',
  components: {
    ShopingCard,
  },
};
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
/* @media only screen and (max-width: 600px) {
  .carou {
   margin-top: 2rem;
  }
}
@media only screen and (max-width: 340px) {
  .carou {
   margin-top: 6rem;
  }
}
@media only screen and (max-width: 281px) {
  .carou {
   margin-top: 8rem;
  }
} */
</style>