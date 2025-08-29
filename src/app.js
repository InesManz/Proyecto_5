import { createHeader } from "./components/header/header.js";
import { createFooter } from "./components/footer/footer.js";
import { initRouter } from "./router/router.js";
import "./style.css";

export function App() {
  const container = document.createElement("div");

  // Header
  container.appendChild(createHeader());

  // Main 
  const main = document.createElement("main");
  main.id = "app";
  container.appendChild(main);

  // Router 
  initRouter(main);

  // Footer
  container.appendChild(createFooter());

  return container;
}
