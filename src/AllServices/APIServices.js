import axios from 'axios';
const baseUrl = 'https://dummyjson.com/';

export async function getLatestProducts(limit, skip) {
  return await axios.get(`${baseUrl}products?limit=${limit}&skip=${skip}`);
}

export async  function fetchLatestProducts(name){
  return await axios.get(`${baseUrl}products/categories/${name}`)
}
export async function getProductsCatagories() {
  return await axios.get(`${baseUrl}products/categories`);
}

export async function getProductsByCatagories(products) {
  return await axios.get(`${baseUrl}products/category/${products}`);
}

export async function getProducts() {
  return await axios.get(`${baseUrl}products`);
}

export async function addNewProduct(newAddedProduct){
    return await axios.get(`${baseUrl}products/add/${newAddedProduct}`)
}

export async function logIn(credentials){
  return await axios.post(`${baseUrl}auth/login` ,credentials)

}


export async function getSearchProducts(searchedText){ 
 
   return await axios.get(`${baseUrl}products/search?q=${searchedText}`)
}

