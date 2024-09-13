import { Component } from "react";

export class ShopItemClass extends Component {
  render() {
    const { brand, title, descriptions, descriptionFull, price, currency } =
      this.props.item;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{descriptions}</h3>
        <div className="description">{descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {currency}
            {price}.00
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
