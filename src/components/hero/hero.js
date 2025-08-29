import "./hero.css";
import { initHeroAnimation } from "./hero.animation.js";

export function createHero() {
  const hero = document.createElement("section");
  hero.classList.add("hero");

  const img = document.createElement("img");
  img.id = "hero-img"; // 
  img.src = "/productsimg/515142778_1278204466995733_855844483442078202_n.heic"; 
  img.alt = "Imagen principal de portada";

  hero.appendChild(img);

  
  requestAnimationFrame(() => initHeroAnimation());

  return hero;
}
