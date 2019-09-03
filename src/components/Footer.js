import React from "react";

const Footer = props => {
  const arrayData = props.array;
  const newArray = arrayData.map(listItems => <li>{listItems}</li>);
  return <div className="footer">{newArray}</div>;
};

export default Footer;
