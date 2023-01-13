<template>
  <div class="nav-wrapper">
    <nav
      class="navbar navbar-expand-lg navbar-light sticky-top nav"
      id="navbar"
    >
      <a class="navbar-brand nav-links">B4Buy</a>
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
            <router-link to="/home" class="nav-link"
              >Home <span class="sr-only"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addproducts" class="nav-link" href="#"
              >Add Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/catagories" class="nav-link cat-bbtn"
              >Catagories</router-link
            >
          </li>
          <router-link to="/Cart"
            ><i class="fa fa-shopping-cart fa-xl btn mr-5"></i
          ></router-link>
          <!-- <li class="nav-item ">
          <router-link to="/AllProducts" class="nav-link  cat-bbtn "
            >All Products</router-link
          >
        </li> -->
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

            <button
              class="btn btn-outline-success my-2 my-sm-0 nav-links"
              type="submit "
              @click.prevent="searchValue"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <div class="collapse navbar-collapse" id="navbar-list-4">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                    width="40"
                    height="40"
                    class="rounded-circle"
                  />
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link class="dropdown-item" to="/profilePage"
                    >Dashboard</router-link
                  >
                  <router-link class="dropdown-item" to="/login"
                    >LogIn</router-link
                  >
                  <a class="dropdown-item" href="#">Log Out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    searchValue() {
      this.$router.push({
        name: 'SearchProducts',
        params: { id: this.searchText },
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 90%;
  margin: 0 auto;
}
.nav-wrapper,
.nav {
  background-color: #0275dd;
}
.nav-links {
  color: white;
  font-size: larger;
}

.search-bar {
  width: 50rem;
  display: flex;
  display: flex-start;
}

.wrapper {
  padding: 6.25rem;
}

#submit {
  display: flex;
  justify-content: center;
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
</style>