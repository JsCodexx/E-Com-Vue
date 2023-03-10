import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      component: () => import('./Pages/HomePage/HomePage.vue'),
    },

    {
      path: '/catagories',
      component: () => import('./Pages/Catagories/Catagories.vue'),
    },
    {
      name: 'SingleProduct',
      path: '/catagories/:productCata',
      component: () => import('./Pages/Catagories/ProductCatagories.vue'),
    },
    {
      name: 'addproducts',
      path: '/addproducts',
      component: () => import('./Pages/AddProduct.vue'),
    },
    {
      name: 'ProductDetails',
      path: '/ProductDetails/:id',
      component: () => import('./Pages/ProductDetails.vue'), //This is for the lazyloading
    },

    {
      name: 'ShoppingCart',
      path: '/Cart',
      component: () => import('./Pages/CartPage.vue'),
    },
    {
      name: 'SearchProducts',
      path: '/search/:id',
      component: () => import('./Pages/SearchProduct.vue'),
    },
 
    {
      name: 'login',
      path: '/login',
      component: () => import('./Pages/LoginPage.vue'),
    },
    {
      name: 'ProfilePage',
      path: '/ProfilePage',
      component: () => import('./Pages/ProfilePage.vue'),
    },
    { path: '/:notFound(.*)', component: () => import('./Pages/NotFound.vue') },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
});

export default router;
