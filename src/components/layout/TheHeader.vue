<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top nav"
    id="navbar"
  >
    <a class="navbar-brand nav-links" href="#">B4Buy</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/home" class="nav-link "
            >Home <span class="sr-only"></span></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">About</a>
        </li>
        <li class="nav-item ">
          <router-link to="/catagories" class="nav-link  cat-bbtn "
            >Catagories</router-link
          >
        </li>
      </ul>
      <div class="search-bar">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchText"
          />
          
            <button class="btn btn-outline-success my-2 my-sm-0 nav-links" type="submit "
            @click.prevent="searchValue">

              Search
            </button>

        </form>
      </div>
    </div>
    <form class="form-inline mt-2">
      <div class="input-group mb-2 mr-sm-2">
        <label class="sr-only h-75" for="inlineFormInputGroupUsername2"
          >Username</label
        >
        <input
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="inlineFormInputGroupUsername2"
          placeholder="Username"
        />
      </div>
      <div id="submit">
        <div class="input-group mb-2 mr-sm-2">
          <label class="sr-only h-75" for="inlineFormInputName2">Name</label>
          <input
            type="text"
            class="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-outline-success h-25 nav-links">
          Sign In
        </button>
      </div>
    </form>
  </nav>
</template>
<script>
export default{
  data() {
    return {
      searchText:'',
    }
  },
  methods: {
    searchValue(){
      this.$router.push({ name: 'SearchProducts', params: { id:this.searchText } })
    }
  },
}

</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: rgb(241, 237, 237);
  font-family: 'Calibri', sans-serif !important;
}
.nav{
  background-color: #0275dd;
}
.nav-links{
  color: white;
  font-size: larger;
}

.search-bar {
  width: 40rem;
  display: flex;
  display: flex-end;
}

.wrapper {
  padding: 100px;
}

.image--cover {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  /* margin: 20px; */

  object-fit: cover;
  object-position: center right;
}

#submit {
  display: flex;
  justify-content: center;
}

.heroimage {
  height: 73rem;
  width: 160rem;
}

.catagories-div {
  padding: 2rem;
  justify-content: space-around;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border: 5px solid rgb(202, 198, 198);
}

/* Shopping Cards */

.product-wrapper,
.product-img {
  overflow: hidden;
  position: relative;
}

.mb-45 {
  margin-bottom: 45px;
}

.product-action {
  bottom: 0px;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: center;
  transition: all 0.6s ease 0s;
}

.product-wrapper {
  border-radius: 10px;
}

.product-img > span {
  background-color: #fff;
  box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
  color: #333;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  left: 20px;
  letter-spacing: 1px;
  padding: 3px 12px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 20px;
}

.product-action-style {
  background-color: #fff;
  box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
  display: inline-block;
  padding: 16px 2px 12px;
}

.product-action-style > a {
  color: #979797;
  line-height: 1;
  padding: 0 21px;
  position: relative;
}

.product-action-style > a.action-plus {
  font-size: 18px;
}

.product-wrapper:hover .product-action {
  bottom: 20px;
  opacity: 1;
}
.container {
  margin: 0;
}
.row {
  justify-content: center;
  width: 100vw;
}

/* .details {
    border: 1.5px solid grey;
    color: #212121;
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 10px #212121;
}
.cart {
    background-color: #212121;
    color: white;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 900;
    width: 100%;
    height: 39px;
    padding-top: 9px;
    box-shadow: 0px 5px 10px #212121;
}
.card {
    width: fit-content;
}
.card-body {
    width: fit-content;
}
.btn {
    border-radius: 0;
}
.img-thumbnail {
    border: none;
}
.card {
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding-bottom: 10px;
} */

/* footer */

.tags a {
  padding: 4px;
  display: block;
  color: white;
}

.footer-text {
  display: flex;
  align-items: center;
}

.container1 {
  margin-top: 2rem;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  height: 30rem;
  justify-content: space-around;
  background-color: rgb(44, 46, 48);
  width: 100%;
}

.container1 a:hovere {
  text-decoration: underline;
}

#imagelogo {
  width: 50px;
  height: 40px;
  background-color: transparent;
  /* background-color: pink;   */
}
</style>