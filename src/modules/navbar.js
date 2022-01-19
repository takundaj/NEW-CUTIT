class navBar {
  constructor(element) {
    this.trigger = element.querySelector(".nav-trigger");
    this.dropdown = element.querySelector(".nav-dropdown");
  }

  init() {}

  drop() {
    this.dropdown.classList.add("collapsed");
    this.trigger.style.color = "#9f8268";
  }

  fold() {
    this.dropdown.classList.remove("collapsed");
    this.trigger.style.color = "black";
  }
}

export { navBar as default };
