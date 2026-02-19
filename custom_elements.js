class CarTable extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>Привет! Я кастомный элемент</p>";
  }
}

customElements.define("car-table", CarTable);
