import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.productQuantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    this.setState(
      (prevState) => ({
        value: Number(prevState.value) + 1,
      }),
      function () {
        this.props.updateQuantity(this.state.value);
      }
    );
    e.preventDefault();
  }

  decrement(e) {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
      this.setState(
        (prevState) => ({
          value: Number(prevState.value) - 1,
        }),
        function () {
          this.props.updateQuantity(this.state.value);
        }
      );
    }
  }

  resetQuantity() {
    this.setState({
      value: 1,
    });
  }
  render() {
    return (
      <div className="flex">
        <a
          href="#"
          className="bg-gray-100 border hover:no-underline h-8 px-2 py-1 rounded"
          onClick={this.decrement}
        >
          –
        </a>

        <div className=" bg-gray-100 border h-8 w-8 px-2 py-1 mx-2 rounded text-sm">
          {this.state.value}
        </div>
        <a
          href="#"
          className="bg-gray-100 border hover:no-underline h-8 px-2 py-1 rounded"
          onClick={this.increment}
        >
          +
        </a>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
