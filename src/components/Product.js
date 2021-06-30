import React, { Component } from "react";
import Counter from "./Counter";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      isAdded: false,
    };
  }

  addToCart(image, title, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          tile: title,
          price: price,
          id: id,
          quantity: quantity,
        },
      },
      function () {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true,
      },
      function () {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {},
          });
        }, 3500);
      }
    );
  }

  render() {
    let image = this.props.image;
    let title = this.props.title;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    return (
      <div className="border border-black">
        <div className="bg-white h-72 overflow-hidden p-16 shadow-md bg-opacity-10 bg-clip-padding">
          <img src={image} className="container h-48 hero mx-auto w-48" />
        </div>
        <div className="float-left p-8">
          <h4 className="font-semibold text-gray-500">{this.props.title}</h4>
          <p className="pb-2 pt-2"> $ {this.props.price}</p>{" "}
          <div>
            <div className="inline-block">
              <Counter
                productQuantity={quantity}
                updateQuantity={this.props.updateQuantity}
                resetQuantity={this.resetQuantity}
              />
            </div>

            <button
              className={!this.state.isAdded ? "" : "added"}
              type="button"
              onClick={this.addToCart.bind(
                this,
                image,
                title,
                price,
                id,
                quantity
              )}
              className="bg-indigo-500 hover:bg-indigo-300 m-2 p-2 rounded-lg"
            >
              {!this.state.isAdded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="lightgreen"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
