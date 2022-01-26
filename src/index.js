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

import navbar from "./modules/navbar";
import Dropdown from "./modules/dropdown";
import FaqBtn from "./modules/faq";
import "./modules/popup";
// importing scroll.js library
import Scrollbar from "../node_modules/smooth-scrollbar";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "../node_modules/swiper";
//title animtion
import "./modules/title-animation";

// image imports (how to)
import featureImageBooking from "./images/feature-booking.png";
import featureImageCashless from "./images/feature-cashless.png";
import featureImageConnect from "./images/feature-connect.png";
import featureImageFind from "./images/feature-find.png";
import featureImageGrow from "./images/feature-grow.png";

// image imports (how to - Desktop)
import howToImageOne from "./images/howto-image-1@2x.png";
import howToImageTwo from "./images/howto-image-2@2x.png";
import howToImageThree from "./images/howto-image-3@2x.png";
import howToImageFour from "./images/howto-image-4@2x.png";
import howToImageFive from "./images/howto-image-5@2x.png";
import howToImageSix from "./images/howto-image-6@2x.png";

// image imports (how to - Desktop)
import howToImageMobileOne from "./images/nonumber1.png";
import howToImageMobileTwo from "./images/nonumber2.png";
import howToImageMobileThree from "./images/nonumber3.png";
import howToImageMobileFour from "./images/nonumber4.png";
import howToImageMobileFive from "./images/nonumber5.png";
import howToImageMobileSix from "./images/nonumber6.png";

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
        featureImage.setAttribute("src", featureImageBooking);
      }

      if (dropdown.classList.contains("cashless")) {
        featureImage.setAttribute("src", featureImageCashless);
      }

      if (dropdown.classList.contains("connect")) {
        featureImage.setAttribute("src", featureImageConnect);
      }

      if (dropdown.classList.contains("find")) {
        featureImage.setAttribute("src", featureImageFind);
      }

      if (dropdown.classList.contains("grow")) {
        featureImage.setAttribute("src", featureImageGrow);
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

// how to images
const howToImage1 = new Image();

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
      howToImageDesktop.setAttribute("src", howToImageOne);
    } else if (btn.classList.contains("download") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", howToImageMobileOne);
    }

    if (btn.classList.contains("signup") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", howToImageTwo);
    } else if (btn.classList.contains("signup") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", howToImageMobileTwo);
    }

    if (btn.classList.contains("post") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", howToImageThree);
    } else if (btn.classList.contains("post") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", howToImageMobileThree);
    }

    if (btn.classList.contains("pick") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", howToImageFour);
    } else if (btn.classList.contains("pick") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", howToImageMobileFour);
    }

    if (btn.classList.contains("become") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", howToImageFive);
    } else if (btn.classList.contains("become") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", howToImageMobileFive);
    }

    if (btn.classList.contains("book") && window.innerWidth > 992) {
      howToImageDesktop.setAttribute("src", howToImageSix);
    } else if (btn.classList.contains("become") && window.innerWidth < 992) {
      howToImageMobile.setAttribute("src", howToImageMobileSix);
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

// contact form
// Send us a message functionality
const contactForm = document.querySelector(".about-us_contact-form");
const contactFormRepsonse = document.querySelector(".contact-form-response");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // https://github.com/github/fetch
  fetch("https://formsubmit.co/ajax/support@cutitapp.co.uk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      message: contactForm.message.value.trim(),
    }),
  })
    .then((response) => {
      response.json();
      if (response.ok) {
        contactFormRepsonse.style.display = "block";
        contactFormRepsonse.style.color = "green";
        contactFormRepsonse.textContent =
          "Thank you, your message has been sent!";
      } else {
        contactFormRepsonse.style.display = "block";
        contactFormRepsonse.style.color = "red";
        contactFormRepsonse.textContent =
          "Sorry, there was a problem. please use our email to the left.";
      }
    })

    .then((data) => console.log(data))

    .catch((error) => console.log(error));
});
