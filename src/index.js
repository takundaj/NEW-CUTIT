import "./styles/general.css";
import "./styles/navbar.css";
import "./styles/button.css";
import "./styles/media.css";
import "./styles/dropdown.css";
import "./styles/faq.css";
import "./styles/price-card.css";
import "./styles/page.css";
import "./styles/contact-form.css";
import "./styles/footer.css";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import navbar from "./modules/navbar";
import Dropdown from "./modules/dropdown";
import FaqBtn from "./modules/faq";
// importing scroll.js library
import Scrollbar from "../node_modules/smooth-scrollbar";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "../node_modules/swiper";

// initialise nav bar
const navBar = new navbar(document.querySelector(".navbar"));

navBar.trigger.addEventListener("click", (e) => {
  if (!navBar.dropdown.classList.contains("collapsed")) {
    navBar.drop();
  } else if (navBar.dropdown.classList.contains("collapsed")) {
    navBar.fold();
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 992) {
    navBar.fold();
  }
});

// initialize dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);

  instance.trigger.addEventListener("click", (e) => {
    if (!instance.content.classList.contains("collapsed")) {
      const allDropdownContents =
        document.querySelectorAll(".dropdown_content");
      allDropdownContents.forEach((item) => {
        item.classList.remove("collapsed");
      });

      instance.drop();
    } else if (!instance.content.classList.contains("hide")) {
      instance.fold();
    }
  });
});

// initialize 'how to' scroll bars

Scrollbar.init(document.querySelector("#how-to-scrollbar"), {
  alwaysShowTracks: true,
});

// initialize price card scroll bar
// const priceCardLLists = document.querySelectorAll(".price-card_list");

// priceCardLLists.forEach((list) => {
//   Scrollbar.init(list, {
//     alwaysShowTracks: true,
//   });
// });

// initialize faq
const faqs = document.querySelectorAll(".faq-btn");

faqs.forEach((faq) => {
  const instance = new FaqBtn(faq);

  instance.trigger.addEventListener("click", (e) => {
    if (!instance.content.classList.contains("faq-collapsed")) {
      instance.drop();
    } else if (instance.content.classList.contains("faq-collapsed")) {
      instance.fold();
    }
  });
});

//SWIPER: configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
