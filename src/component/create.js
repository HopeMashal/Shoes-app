import React from "react";
import api from "./api";

class Create extends React.Component {
  state = { brand: "", description: "", price: "" };

  postProducts = async (e) => {
    e.preventDefault();
    await api.post("/", this.state);
    this.props.getProducts();
    this.props.CreateProduct();
  };

  render() {
    return (
      <div className="Create-Container">
        <div className="Create-Inputs">
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
        </div>
        <button className="add-btn" type="submit" onClick={this.postProducts}>
        ➕🛒 Create
        </button>
      </div>
    );
  }
}
export default Create;
