import "./gallery.css";

const slugify = s =>
  s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

export function createGallery(products) {
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  products.forEach(product => {
    const item = document.createElement("div");
    item.className = "product";

    const title = product.name || product.title || "Producto";

    item.innerHTML = `
      <img src="${product.image}" alt="${title}" />
      <h3>${title}</h3>
      <p>${product.price} €</p>
    `;

    // 🔗 al hacer click, navega a la página de producto
    item.addEventListener("click", () => {
      window.location.hash = `#/product/${product.id}`;
    });

    gallery.appendChild(item);
  });

  return gallery;
}
