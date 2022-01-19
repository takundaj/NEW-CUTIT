class FaqBtn {
  constructor(element) {
    this.element = element.querySelector(".faq-btn");
    this.trigger = element.querySelector(".faq-trigger");
    this.content = element.querySelector(".faq-content");
  }

  drop() {
    // make content visible
    this.content.classList.add("faq-collapsed");
  }

  fold() {
    // make content visible
    this.content.classList.remove("faq-collapsed");
  }
}

export { FaqBtn as default };
