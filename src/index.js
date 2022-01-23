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
import "./styles/popup.css";
import "./styles/privacy+terms.css";
import "./styles/subscribe-floater.css";
import "./styles/cookie-consent.css";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import navbar from "./navbar";
import Dropdown from "./dropdown";
import FaqBtn from "./faq";
import "./popup.js";
// importing scroll.js library
import Scrollbar from "../node_modules/smooth-scrollbar";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "../node_modules/swiper";
//title animtion
import "./title-animation";

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
const featureImage = document.querySelector(".feature-img > img");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);

  instance.element.addEventListener("click", (e) => {
    if (!instance.content.classList.contains("collapsed")) {
      //close other dropdowns if open
      const allDropdownContents =
        document.querySelectorAll(".dropdown_content");
      allDropdownContents.forEach((item) => {
        item.classList.remove("collapsed");
      });

      const allDropdowns = document.querySelectorAll(".dropdown");
      allDropdowns.forEach((item) => {
        item.classList.remove("dropdown-active");
      });

      if (!dropdown.classList.contains("dropdown-active")) {
        dropdown.classList.add("dropdown-active");
      }

      //trigger dropdown
      instance.drop();

      //image change
      if (dropdown.classList.contains("booking")) {
        featureImage.setAttribute("src", "/src/images/feature-booking.png");
      }

      if (dropdown.classList.contains("cashless")) {
        featureImage.setAttribute("src", "/src/images/feature-cashless.png");
      }

      if (dropdown.classList.contains("connect")) {
        featureImage.setAttribute("src", "/src/images/feature-connect.png");
      }

      if (dropdown.classList.contains("find")) {
        featureImage.setAttribute("src", "/src/images/feature-find.png");
      }

      if (dropdown.classList.contains("grow")) {
        featureImage.setAttribute("src", "/src/images/feature-grow.png");
      }
    } else if (!instance.content.classList.contains("hide")) {
      dropdown.classList.remove("dropdown-active");
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

// initialize faq - main page
const faqs = document.querySelectorAll(".faq-btn");

faqs.forEach((faq) => {
  console.log(faq);
  const instance = new FaqBtn(faq);

  instance.element.addEventListener("click", (e) => {
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

// How To Button Functionality
const howToBtns = document.querySelectorAll(".how-to-btn");
const howToImageDesktop = document.querySelector(".how-to-desktop-img");
const howToImageMobile = document.querySelector(".how-to-mobile-img");

howToBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    howToBtns.forEach((button) => {
      button.classList.remove("how-to-btn-active");
      const icon = button.querySelector(".how-to-btn-icon");
      icon.classList.remove("how-to-btn-icon-active");
    });
    const icon = btn.querySelector(".how-to-btn-icon");
    btn.classList.add("how-to-btn-active");
    icon.classList.add("how-to-btn-icon-active");

    if (btn.classList.contains("download") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", "/src/images/howto-image-1@2x.png");
    } else if (btn.classList.contains("download") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", "/src/images/nonumber1.png");
    }

    if (btn.classList.contains("signup") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", "/src/images/howto-image-2@2x.png");
    } else if (btn.classList.contains("signup") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", "/src/images/nonumber2.png");
    }

    if (btn.classList.contains("post") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", "/src/images/howto-image-3@2x.png");
    } else if (btn.classList.contains("post") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", "/src/images/nonumber3.png");
    }

    if (btn.classList.contains("pick") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", "/src/images/howto-image-4@2x.png");
    } else if (btn.classList.contains("pick") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", "/src/images/nonumber4.png");
    }

    if (btn.classList.contains("become") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", "/src/images/howto-image-5@2x.png");
    } else if (btn.classList.contains("become") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", "/src/images/nonumber5.png");
    }

    if (btn.classList.contains("book") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", "/src/images/howto-image-6@2x.png");
    } else if (btn.classList.contains("become") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", "/src/images/nonumber6.png");
    }
  });
});

window.addEventListener("scroll", (e) => {
  const subFloater = document.querySelector(".subscribe-floater");
  if (window.scrollY > 6780) {
    subFloater.style.display = "none";
  } else if (window.scrollY < 6780 && window.innerWidth > 768) {
    subFloater.style.display = "inline-block";
  }
});

window.addEventListener("resize", (e) => {
  const subFloater = document.querySelector(".subscribe-floater");
  if (window.innerWidth < 768) {
    subFloater.style.display = "none";
  } else if (window.innerWidth > 768) {
    subFloater.style.display = "inline-block";
  }
});
