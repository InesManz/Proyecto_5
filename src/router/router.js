import { createHero } from "../components/hero/hero.js";
import { createGallery } from "../components/gallery/gallery.js";
import { createProductDetail } from "../components/productDetail/productDetail.js";
import products from "../data/products.js";
import { createSizesSection } from "../components/info/size.js";
import { createContactSection } from "../components/info/contact.js";
import { createReturnsSection } from "../components/info/returns.js";
import { createShippingSection } from "../components/info/shipping";

const slugify = s => s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

// Home
function HomePage(main) {
  main.innerHTML = "";
  main.appendChild(createHero());
  const shuffled = [...products].sort(() => Math.random() - 0.5).slice(0, 20);
  main.appendChild(createGallery(shuffled));
}

// Categoría
function CategoryPage(main, category) {
  main.innerHTML = "";
  const filtered = products.filter(p => p.category === category);
  main.appendChild(
    filtered.length > 0 ? createGallery(filtered) : (() => {
      const d = document.createElement("div");
      d.innerHTML = `<h2>No hay productos en esta categoría.</h2>`;
      return d;
    })()
  );
}

// Detalle
function ProductPage(main, productId) {
  main.innerHTML = "";
  const product = products.find(p => p.id === productId);
  if (product) {
    main.appendChild(createProductDetail(product));
  } else {
    main.innerHTML = "<h2>Product not found</h2>";
  }
}

// Router
export function initRouter(main) {
  function router() {
    const hash = window.location.hash || "#/home";

    if (hash.startsWith("#/product/")) {
      const productId = parseInt(hash.split("/")[2]);
      ProductPage(main, productId);
      return;
    }

    // Rutas de Info
    if (hash.startsWith("#/info")) {
      main.innerHTML = "";
      if (hash === "#/info/sizes") {
        main.appendChild(createSizesSection());
      } else if (hash === "#/info/contact") {
        main.appendChild(createContactSection());
      } else if (hash === "#/info/returns") {
        main.appendChild(createReturnsSection());
      } else if (hash === "#/info/shipping") {
        main.appendChild(createShippingSection());
      } else {
        main.innerHTML = "<h2>Info Page</h2><p>Selecciona una sección.</p>";
      }
      return;
    }

    // Rutas principales
    switch (hash) {
      case "#/home":        return HomePage(main);
      case "#/t-shirts":    return CategoryPage(main, "t-shirts");
      case "#/sweatshirts": return CategoryPage(main, "sweatshirts");
      case "#/bags":        return CategoryPage(main, "bags");
      case "#/caps":        return CategoryPage(main, "caps");
      case "#/patches":     return CategoryPage(main, "patches");
      default:
        main.innerHTML = "<h2>404 - Página no encontrada</h2>";
    }
  }

  window.addEventListener("hashchange", router);
  router();
}
