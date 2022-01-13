import "./styles/general.css";
import "./styles/navbar.css";
import "./styles/button.css";

import navbar from "./modules/navbar";

const navBar = new navbar(document.querySelector(".navbar"));

navBar.trigger.addEventListener("click", (e) => {
  if (navBar.dropdown.classList.contains("hide")) {
    navBar.drop();
  } else if (!navBar.dropdown.classList.contains("hide")) {
    navBar.fold();
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 992) {
    navBar.fold();
  }
});
