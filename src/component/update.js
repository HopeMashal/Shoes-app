import React from "react";
import api from "./api";
import productImage from './images/image.jpg'

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { brand, description, price } = this.props.initial;
    this.state = { brand, description, price };
  }

  handleUpdate = async (e) => {
    e.preventDefault();
    this.props.visibleFunc();
    await api.put(this.props.id, this.state);
    this.props.getProducts();
  };

  handleCancel = async () => {
    this.props.visibleFunc();
  };

  render() {
    return (
      <div className="Update">
        <div className="image-products">
          <img className="product-image" src={productImage} alt="product"/>
        </div>
        <div>
        <input
          type="text"
          name={this.state.brand}
          placeholder={`New Brand`}
          value={this.state.brand}
          onChange={e=>this.setState({brand:e.target.value})}
        />
        <br/>
        <input
          type="text"
          name={this.state.description}
          placeholder={`New Description`}
          value={this.state.description}
          onChange={e=>this.setState({description:e.target.value})}
        />
        <br/>
        <input
          type="text"
          name={this.state.price}
          placeholder={`New Price`}
          value={this.state.price}
          onChange={e=>this.setState({price:e.target.value})}
        />
        <br/>
        <button className="Btn" type="submit" onClick={this.handleUpdate}>
          💾 Save
        </button>
        <button className="Btn" onClick={this.handleCancel}>🙅🏻 Cancel</button>
        </div>
      </div>
    );
  }
}
export default Update;