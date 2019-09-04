import React, { Component } from "react";
import Orders from "./components/Order";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h4 className="">Restaurant Orders</h4>
        <Orders orderType="pizzas" />
        <Orders orderType="Salads" />
      </div>
    );
  }
}

export default Restaurant;
