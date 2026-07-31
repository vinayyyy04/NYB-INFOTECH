import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: 0,
    };
  }

  addToCart = () => {
    this.setState({
      cartItems: this.state.cartItems + 1,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Targets Completed</h2>

        <h3>Completed Targets in career: {this.state.cartItems}</h3>

        <button onClick={this.addToCart}>
          Add to Submitt
        </button>
      </div>
    );
  }
}

export default ClassComponent;