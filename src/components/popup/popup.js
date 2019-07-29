import "./popup.sass";

class Popup {
  constructor(button, container, closeFormElement) {
    this.button = button;
    this.container = container;
    this.closeFormElement = closeFormElement;

    if (this.button != null) {
      this.button.addEventListener("click", () => {
        this.open();
      });
    }
    this.container.addEventListener("click", event => {
      if (event.target === this.container) {
        this.close();
      }
    });
    this.closeFormElement.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keyup", event => {
      if (event.key === "Escape") {
        this.close();
      }
    });
  }

  open() {
    this.container.classList.add("is-active");
  }

  close() {
    this.container.classList.remove("is-active");
  }
}

export { Popup };
