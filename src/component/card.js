import React from "react";
import Update from "./update";
import api from "./api";
import productImage from './images/image.jpg'

class Card extends React.Component {
  state = { visibilityUpdate: false, id: "" };

  changeVisible = () => {
    return this.setState({ visibilityUpdate: !this.state.visibilityUpdate });
  };

  deleteProducts = async () => {
    await api.delete(`/${this.props.product.id}`);
    this.props.getProducts();
  };

  render() {
    if (this.state.visibilityUpdate)
      return (
        <div key={this.props.product.id} className="Card">
          <Update
            id={this.props.product.id}
            getProducts={this.props.getProducts}
            visibleFunc={this.changeVisible}
            initial={this.props.product}
          />
        </div>
      );
    const { brand, description, price } = this.props.product;
    return (
      <div key={this.props.product.id} className="Card">
        <div className="image-products">
          <img className="product-image" src={productImage} alt="product"/>
        </div>
        <div>
          <b>Brand:</b> {brand}
          <br />
          <b>Description:</b> {description}
          <br />
          <b>Price:</b> {price}
          <br />
          <button className="Btn" onClick={this.changeVisible}>📝 Update</button>
          <button className="Btn" onClick={this.deleteProducts}>🗑️ Remove</button>
        </div>
      </div>
    );
  }
}
export default Card;