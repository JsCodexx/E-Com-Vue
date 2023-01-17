<template>
  <nav class="navbar navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand" href="#"
        >BUY4YOU</router-link
      >
      <form class="d-flex mt-1" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder=""
          aria-label="Search"
          v-model="searchText"
        />
        <button
          @click.prevent="searchValue"
          class="btn text-light border-0 fa fa-search"
          type="submit"
        ></button>
      </form>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="fa fa-bars "></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header bg-dark">
          <h5
            class="offcanvas-title text-light bg-dark"
            id="offcanvasNavbarLabel"
          >
            BUY4YOU
          </h5>
          <button
            type="button"
            class="btn-close bg-white text-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body bg-dark">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link
                to="/home"
                class="nav-link active text-light bg-dark"
                aria-current="page"
                href="#"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/addproducts"
                class="nav-link active text-light bg-dark"
                aria-current="page"
                href="#"
                >AddProduct</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/catagories"
                class="nav-link text-light bg-dark"
                href="#"
                type="button"
                >Categories</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/Cart"
                class="nav-link text-light bg-dark fa-solid fa-cart-shopping"
              >
                CART</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light bg-dark fa fa-user"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul class="dropdown-menu bg-dark">
                <li>
                  <router-link
                    class="dropdown-item text-light bg-dark"
                    to="/profilePage"
                    >Dashboard</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-light bg-dark"
                    to="/login"
                    >Login</router-link
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    //this method will pass the searched text to the SearchProducts page
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
  width: 100%;
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
.btn {
  margin: 0;
  padding: 0;
}
</style>