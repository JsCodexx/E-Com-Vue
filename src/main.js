import { createApp } from 'vue';
import MainCard from './components/layout/MainCard.vue';
import CatalogCard from './components/layout/CatalogCard.vue';
import CatalogProduct from './components/layout/CatalogProduct.vue';
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router';
import axios from 'axios';
import store from './Pages/Store';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(router, axios);
app.use(VueSweetalert2);
app.use(store);
app.component('main-card', MainCard);
app.component('catalog-card', CatalogCard);
app.component('catalog-product', CatalogProduct);




app.mount('#app');
