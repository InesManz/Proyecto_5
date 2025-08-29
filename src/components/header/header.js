import "./header.css";
import logoUrl from "../../assets/SEPULCRO-Logo_710x.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import spotifyIcon from "../../assets/icons/spotify.svg";
import searchIcon from "../../assets/icons/search.svg";
import handbagIcon from "../../assets/icons/handbag.svg";
import moonIcon from "../../assets/icons/moon.svg";

export function createHeader() {
  const header = document.createElement("header");

  // 🔹 Top bar
  const top = document.createElement("div");
  top.classList.add("header-top");

  const social = document.createElement("div");
  social.classList.add("social-icons");
  social.innerHTML = `
    <a href="#"><img src="${facebookIcon}" alt="Facebook"></a>
    <a href="#"><img src="${instagramIcon}" alt="Instagram"></a>
    <a href="#"><img src="${spotifyIcon}" alt="Spotify"></a>
  `;

  const options = document.createElement("div");
  options.classList.add("options");
  options.innerHTML = `
    <span>Spain (EUR €)</span>
    <button id="darkModeToggle"><img src="${moonIcon}" alt="Dark mode"></button>
  `;

  top.appendChild(social);
  top.appendChild(options);

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = `
  <a href="#/home">
    <img src="${logoUrl}" alt="Logo" />
  </a>
`;

  // 🔹 Bottom bar con dropdown
  const bottom = document.createElement("div");
  bottom.classList.add("header-bottom");
  bottom.innerHTML = `
    <nav class="nav-left">
      <ul>
        <li class="has-dropdown">
          <a href="#/t-shirts">Clothing</a>
          <ul class="dropdown">
            <li><a href="#/t-shirts">T-Shirt</a></li>
            <li><a href="#/sweatshirts">Sweatshirt</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="#/caps">Accessories</a>
          <ul class="dropdown">
            <li><a href="#/bags">Bag</a></li>
            <li><a href="#/caps">Headwear</a></li>
            <li><a href="#/patches">Patches</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="#/info">Info</a>
          <ul class="dropdown">
            <li><a href="#/info/sizes">Size Guide</a></li>
            <li><a href="#/info/shipping">Shipping</a></li>
            <li><a href="#/info/returns">Returns</a></li>
            <li><a href="#/info/contact">Contact</a></li>
          </ul>
        </li>

        
      </ul>
    </nav>
  `;

  bottom.appendChild(logo);

  bottom.innerHTML += `
  <div class="nav-right">
    <button class="icon"><img src="${searchIcon}" alt="Buscar"></button>
    <button class="icon" id="cartButton">
      <img src="${handbagIcon}" alt="Carrito">
      <span id="cart-count" class="cart-count">0</span>
    </button>
  </div>
`;


  header.appendChild(top);
  header.appendChild(bottom);

  // 🌙 Dark Mode
  const darkToggle = options.querySelector("#darkModeToggle");

  // cargar preferencia
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  darkToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  // Mostrar/Ocultar carrito al pulsar el icono
  const cartButton = header.querySelector("#cartButton");
  const cartContainer = header.querySelector("#cart");
  cartButton.addEventListener("click", () => {
    cartContainer.classList.toggle("visible");
  });

  return header;
}
