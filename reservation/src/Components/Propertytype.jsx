import React from "react";
import maison1 from "../assets/images/maison1.jpeg"

const PropertyType = ({ image, title }) => {
  return (
    <div className="property-card">
      <img src={maison1} alt= "maison" className="property-image" />
      <h3>Browse by Property type</h3>
    </div>
  );
};

export default PropertyType;
