// src/components/hero/hero.animation.js
import * as anime from "animejs";

export function initHeroAnimation() {
  const heroImg = document.querySelector("#hero-img");

  if (!heroImg) return; // por si no existe aún en el DOM

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      anime.default({
        targets: heroImg,
        opacity: 0,
        translateY: -40, // 🔹 opcional: mueve hacia arriba
        duration: 600,
        easing: "easeInOutQuad"
      });
    } else {
      anime.default({
        targets: heroImg,
        opacity: 1,
        translateY: 0,
        duration: 600,
        easing: "easeInOutQuad"
      });
    }
  });
}
