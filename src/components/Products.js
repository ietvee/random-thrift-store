import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  constructor() {
    super();
  }
  render() {
    let productsData;

    productsData = this.props.productsList.map((product) => {
      return (
        <div>
          <Product
            key={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
            id={product.id}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
          />
        </div>
      );
    });

    let view;
    view = (
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20">
        {productsData}
      </div>
    );
    return <div>{view}</div>;
  }
}

export default Products;
