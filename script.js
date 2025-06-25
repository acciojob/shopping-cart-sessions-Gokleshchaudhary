// Product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
];

// Selecting DOM elements
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const clearCartBtn = document.getElementById('clear-cart-btn');

// Initialize cart
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to render products
function renderProducts() {
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(li);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to render cart
function renderCart() {
    cartList.innerHTML = ''; // Clear existing cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Clear cart functionality
clearCartBtn.addEventListener('click', () => {
    cart = [];
    sessionStorage.removeItem('cart');
    renderCart();
});

// On page load, render products and cart
window.onload = function() {
    renderProducts();
    renderCart();
};