import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('./Pages/HomePage/HomePage.vue') },
    {
      path: '/catagories',
      component: () => import('./Pages/Catagories/Catagories.vue'),
    },
    {
      name: 'CatagoriesProduct',
      path: '/catagories/:productCata',
      component: () => import('./Pages/Catagories/CatagoryProducts.vue'),
    },
    {
      path: '/addproduct',
      component: () => import('./Pages/AddProduct.vue'),
    },
    {
    
      name: 'ProductDetails',
      path: '/ProductDetails/:id',
      component: () => import('./Pages/ProductDetail.vue'), //This is for the lazyloading
    },
    {
      name: 'SearchProducts',
      path: '/search/:id',
      component: () => import('./Pages/SearchProduct.vue'),
    },
    { path: '/login', component: () => import('./Pages/LoginPage.vue') },
    { path: '/:notFound(.*)', component: () => import('./Pages/NotFound.vue') },
  ],
});

export default router;
