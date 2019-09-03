import React from "react";

const Heading = props => {
  return (
    <div>
      <header className="heading-header">
        {props.headingHeader}
        <img
          className="image-header"
          src="https://images.unsplash.com/photo-1492455417212-e162ed4446e1"
          alt=".."
        />
      </header>
    </div>
  );
};

export default Heading;
