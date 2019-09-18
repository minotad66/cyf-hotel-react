import React from "react";
import Clock from "../Clock";

const Heading = props => {
  return (
    <div>
      <header className="heading-header">
        <Clock />
        <img
          className="image-header"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt=".."
        />
        {props.headingHeader}
      </header>
    </div>
  );
};

export default Heading;
