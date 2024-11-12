// JavaScript for adding items to cart (basic functionality)
const cart = [];

function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    alert(`${productName} added to cart.`);
    console.log("Cart:", cart);
}
