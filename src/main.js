import { createApp } from 'vue';
import MainPage from './components/UI/MainProducts.vue';
import MainCard from './components/layout/MainCard.vue';
import CatalogCard from './components/layout/CatalogCard.vue';
import CatalogProduct from './components/layout/CatalogProduct.vue';
import MainProducts from './components/UI/MainProducts.vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './Pages/Store';







const app = createApp(App);
app.use(router, axios);
app.use(store)


app.component('main-page', MainPage);
app.component('main-card', MainCard);
app.component('main-products', MainProducts);
app.component('catalog-card', CatalogCard);
app.component('catalog-product', CatalogProduct);

// function zoom(e){
//     var zoomer = e.currentTarget;
//     e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//     e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//     x = offsetX/zoomer.offsetWidth*100
//     y = offsetY/zoomer.offsetHeight*100
//     zoomer.style.backgroundPosition = x + '% ' + y + '%';
//   }

app.mount('#app');
