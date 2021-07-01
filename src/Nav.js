import React, { Component } from "react";
import Modal from "./Modal";
import EmptyCart from "./EmptyCart";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      cart: this.props.cartItems,
    };
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  render() {
    let cartItems;
    cartItems = this.state.cart.map((product) => {
      return (
        <div>
          <li className="bg-white grid grid-cols-4 gap-4 m-2 p-2 place-items-center rounded-lg shadow-sm">
            <img className="h-12" src={product.image} />
            <div>
              <p>{product.name}</p>
              <p> $ {product.price}</p>
            </div>
            <div>
              <p>
                {product.quantity} {product.quantity > 1 ? "Items" : "Item"}
              </p>
              <p>{product.quantity * product.price}</p>
            </div>
            <div>
              <a
                href="#"
                onClick={this.props.removeProduct.bind(this, product.id)}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </a>
            </div>
          </li>
        </div>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = <div>{cartItems}</div>;
    }

    return (
      <nav className="bg-white fixed flex flex-col max-h-screen md:flex md:p-4 md:text-left mt-0 shadow-sm text-center top-0 w-full z-10">
        <div>
          <div className="flex justify-center">
            <a href="/" className="hover:no-underline no-underline">
              <h3 className="font-bold px-6 text-3xl text-gray-700">RANDOM</h3>
              <h3 className="font-extralight px-6 text-sm text-gray-700">
                thrift store
              </h3>
            </a>
            <div>
              {this.props.totalItems ? (
                <span className=" bg-yellow-300 float-right  h-6 hover:text-black items-center justify-center rounded-full w-6 z-50">
                  {this.props.totalItems}
                </span>
              ) : (
                ""
              )}
              <a
                onClick={(e) => this.modalOpen(e)}
                className="cursor-pointer hover:no-underline hover:text-black no-underline"
              >
                <div className="float-left ml-8 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
          <div className="h-64 overflow-auto p-1 text-left">
            <div>
              <div>
                <div className="font-semibold pb-4 text-2xl text-gray-700">
                  YOUR CART
                </div>
                <div className="grid grid-cols-2">
                  Number of items :<strong>{this.props.totalItems}</strong>
                </div>
                <div className="grid grid-cols-2">
                  Sub Total :<strong> $ {this.props.total}</strong>
                </div>
              </div>
              <div>{view}</div>
            </div>
          </div>
        </Modal>
      </nav>
    );
  }
}

export default Nav;
