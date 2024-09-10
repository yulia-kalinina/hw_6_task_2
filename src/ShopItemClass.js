import { Component } from "react";

export class ShopItemClass extends Component {
  state = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };

  render() {
    const { brand, title, descriptions, descriptionFull, price, currency } =
      this.state;

    return (
      <div class="main-content">
        <h2>{this.state.brand}</h2>
        <h1>{this.state.title}</h1>
        <h3>{this.state.description}</h3>
        <div class="description">{this.state.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">
            {this.state.currency}
            {this.state.price}.00
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
