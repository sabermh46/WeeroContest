import products from "../productsModel.js";

// Create an empty object to store the product data
let productData = {};

// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the product ID from the query parameters
const productId = urlParams.get('productId');

// Find the product with the specified ID in the products array
const product = products.find((p) => p.id === parseInt(productId));
console.log(product);


var _product = document.querySelector('.product');
_product.querySelector('.image img').setAttribute('src', product.imageLink)
_product.querySelector('.others .name').textContent = product.name

// Now, the productData object contains the data of the selected product
