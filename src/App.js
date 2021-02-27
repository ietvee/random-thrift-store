import React, { Component } from "react";
import axios from "axios";
import Products from "./components/Products";
import Nav from "./Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      quantity: 1,
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  }

  getProducts() {
    let url = "https://fakestoreapi.com/products";
    axios.get(url).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  componentWillMount() {
    this.getProducts();
  }

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex((x) => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
    });
    setTimeout(
      function () {
        this.setState({
          quantity: 1,
        });
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }

  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }

  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }

  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total,
    });
  }

  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total,
    });
  }

  updateQuantity(qty) {
    this.setState({
      quantity: qty,
    });
  }

  render() {
    return (
      <div className="flex-1 h-auto overflow-auto">
        <div>
          <Nav
            total={this.state.totalAmount}
            totalItems={this.state.totalItems}
            cartItems={this.state.cart}
            removeProduct={this.handleRemoveProduct}
            categoryTerm={this.state.category}
            updateQuantity={this.updateQuantity}
            productQuantity={this.state.moq}
          />
        </div>
        <div className="mt-24">
          <Products
            productsList={this.state.products}
            addToCart={this.handleAddToCart}
            productQuantity={this.state.quantity}
            updateQuantity={this.updateQuantity}
          />
        </div>
      </div>
    );
  }
}

export default App;
