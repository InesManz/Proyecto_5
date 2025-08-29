import "./productDetail.css";
import products from "../../data/products.js"; 
import anime from "animejs/lib/anime.es.js";
import { addToCart } from "../cart.js";

export function createProductDetail(product) {
  const section = document.createElement("section");
  section.className = "product-detail";

  const title = product.title || product.name || "Producto";
  const price = product.price;
  const image = product.image;
  const description = product.description || "";

  section.innerHTML = `
    <div class="product-main">
      <div class="product-image">
        <img src="${image}" alt="${title}" />
      </div>
      <div class="product-info">
        <h1>${title}</h1>
        <p class="price">€${price}</p>
        <button class="add-to-cart">ADD TO CART</button>
        <button class="paypal">Pay with PayPal</button>
        <div class="description">
          <h3>Description</h3>
          <p>${description}</p>
        </div>
      </div>
    </div>

    <div class="related">
      <h2>More crap:</h2>
      <div class="related-carousel"></div>
    </div>
  `;

    section.querySelector(".add-to-cart").addEventListener("click", () => {
    addToCart(product);
  }); 

  
  const relatedCarousel = section.querySelector(".related-carousel");
  const others = products.filter(p => p.id !== product.id);

  others.forEach(rel => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.dataset.id = rel.id;
    card.innerHTML = `
      <img src="${rel.image}" alt="${rel.name}" />
      <h4>${rel.name}</h4>
      <p>${rel.price} €</p>
    `;
    card.addEventListener("click", () => {
      window.location.hash = `#/product/${rel.id}`;
    });
    relatedCarousel.appendChild(card);
  });

  relatedCarousel.addEventListener("click", e => {
  const card = e.target.closest(".related-card");
  if (card) {
    const id = card.dataset.id;
    window.location.hash = `#/product/${id}`;
  }
});


  
setTimeout(() => {
  if (relatedCarousel) {
    // limpiamos animaciones previas
    anime.remove(relatedCarousel.querySelectorAll(".related-card"));

    // duplicamos una sola vez para efecto infinito
    if (!relatedCarousel.dataset.cloned) {
      relatedCarousel.innerHTML += relatedCarousel.innerHTML;
      relatedCarousel.dataset.cloned = "true";
    }

    const cards = relatedCarousel.querySelectorAll(".related-card");

    anime({
      targets: cards,
      translateX: [
        { value: "-100%", duration: 10000, easing: "linear" }
      ],
      loop: true,
      easing: "linear",
    });
  }
}, 200);


  return section;
}
