import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: 0
    };
  }
  addOrder = () => {
    this.setState({
      Orders: this.state.Orders + 1
    });
  };
  removeOrder = () => {
    this.setState({
      Orders: this.state.Orders > 0 ? this.state.Orders - 1 : 0
    });
  };
  resetOrder = () => {
    this.setState({
      Orders: 0
    });
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.orderType} Served:{this.state.Orders}
            <RestaurantButton orderHandler={this.addOrder} buttonName="Add" />
            <RestaurantButton
              orderHandler={this.removeOrder}
              buttonName="Remove"
            />
            <RestaurantButton
              orderHandler={this.resetOrder}
              buttonName="Reset"
            />
          </li>
        </ul>
      </div>
    );
  }
}
export default Orders;
