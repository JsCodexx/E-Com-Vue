import axios from 'axios';
const baseUrl = 'https://dummyjson.com/';

export async function getProducts(limit, skip) {
  return await axios.get(`${baseUrl}products?limit=${limit}&skip=${skip}`);
}

export async function getLatestProducts() {
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
