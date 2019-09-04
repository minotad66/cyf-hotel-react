import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button className="btn-btn-primary button" onClick={props.orderHandler}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default RestaurantButton;
