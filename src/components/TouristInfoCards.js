import React from "react";

const TouristInfoCards = props => {
  return (
    <div style={{ width: "17rem" }}>
      <img className="card-img-top" src={props.source} alt="..." />
      <div className="card-body">
        <h2 className="card-title">{props.cityName}</h2>
        <p className="card-text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor
        </p>
        <a href={props.link} className="btn btn-primary">
          {props.ButtonName}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
