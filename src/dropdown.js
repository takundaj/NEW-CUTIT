class Dropdown {
  constructor(element) {
    this.element = element;
    this.trigger = element.querySelector(".dropdown_trigger");
    this.content = element.querySelector(".dropdown_content");
    this.iconContainer = element.querySelector(".dropdown_icon-container");
    this.icon = element.querySelector(".dropdown_icon");
  }

  drop() {
    // make content visible
    this.content.classList.add("collapsed");
    // change icon container background color
    this.iconContainer.classList.add("icon-container-active");
    // change icon color
    this.iconContainer.classList.add("icon-active");
  }

  fold() {
    // make content visible
    this.content.classList.remove("collapsed");
    // change icon container background color
    this.iconContainer.classList.remove("icon-container-active");
    // change icon color
    this.iconContainer.classList.remove("icon-active");
  }
}

export { Dropdown as default };
