import React from "react";
import Card from "./component/card";
import Create from "./component/create";
import api from "./component/api";
import logo from './component/images/logo.png'
import "./App.css";

class App extends React.Component {
  state = {
    products: [],
    addVisibility: true,
    NewProducts: []
  };

  getProducts = async () => {
    const { data } = await api.get();
    this.setState({ products: data, NewProducts: data });
  };

  componentDidMount() {
    this.getProducts();
  }

  filterProducts = (value) => {
    const newProducts = this.state.products.filter(
      (product) => 
        (product.brand).toUpperCase()
          .slice(0, value.length) === value.toUpperCase()
    );
    this.setState({ NewProducts: newProducts });
  };

  render() {
    const createShoe = this.state.addVisibility ? (
      <button
        className="add-btn"
        onClick={() => this.setState({ addVisibility: false })}>
        🛒 Add
      </button>
    ) : (
      <Create
        getProducts={this.getProducts}
        CreateProduct={() => this.setState({ addVisibility: true })}
      />
    );
    const shoeList = this.state.NewProducts.map((product) => {
      return (
        <Card
          getProducts={this.getProducts}
          product={product}
          key={product.id}
        />
      );
    }); 
    return (
      <div className="App">
        <nav>
          <div className="logo-title">
            <img className="logo" src={logo} alt="logo"/>
            Shoes Store
          </div>
          <div className="App-search">
            <input className="search-bar" placeholder="🕵 search products" onChange={e=>this.filterProducts(e.target.value)}/>
          </div>
        </nav>
        <div className="App-create">{createShoe}</div>
        <div className="App-shoe-list">{shoeList}</div>
      </div>
    );
  }
}

export default App;

