export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(product) {
  cart.push(product);
  saveCart();
  updateCartUI();
}

export function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


document.addEventListener("DOMContentLoaded", updateCartUI);
