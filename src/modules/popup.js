// pop up functionality
const popupWrapper = document.querySelector(".popup-wrapper");
const popupCross = document.querySelector(".popup-wrapper .cross");

popupWrapper.addEventListener("click", (e) => {
  popupWrapper.classList.remove("active");
});

const popupBtn = document.querySelector(".nav-btn");
popupBtn.addEventListener("click", (e) => {
  popupWrapper.classList.add("active");
});

const popup = document.querySelector(".popup");

popup.addEventListener("click", (e) => {
  e.stopPropagation();
});

// subscribe floater
const subscribeFloater = document.querySelector(".subscribe-floater");

subscribeFloater.addEventListener("click", (e) => {
  if (!popupWrapper.classList.contains("active")) {
    popupWrapper.classList.add("active");
  } else if (popupWrapper.classList.contains("active"))
    popupWrapper.classList.remove("active");
});

// hero button
const heroSubButton = document.querySelector(".hero-subscribe");

heroSubButton.addEventListener("click", (e) => {
  if (!popupWrapper.classList.contains("active")) {
    popupWrapper.classList.add("active");
  } else if (popupWrapper.classList.contains("active"))
    popupWrapper.classList.remove("active");
});
