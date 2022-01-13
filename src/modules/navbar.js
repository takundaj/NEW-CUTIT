class navBar {
  constructor(element) {
    this.trigger = element.querySelector(".nav-trigger");
    this.dropdown = element.querySelector(".nav-dropdown");
  }

  init() {}

  drop() {
    this.dropdown.classList.remove("hide");
    this.trigger.style.color = "#9f8268";
  }

  fold() {
    this.dropdown.classList.add("hide");
    this.trigger.style.color = "black";
  }
}

export { navBar as default };
