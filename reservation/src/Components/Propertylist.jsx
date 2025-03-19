import React from "react";
import Propertytype from "../Propertytype";
import maison1 from "../assets/images/maison1.jpeg";
import maison2 from "../assets/images/maison2.jpeg";
import maison3 from "../assets/images/maison3.jpeg";
import maison4 from "../assets/images/maison4.jpeg";


const propertyData = [
  { id: 1, image: maison1, title: "Hotels" },
  { id: 2, image: maison2, title: "Apartments" },
  { id: 3, image: maison3, title: "Resorts" },
  { id: 4, image: maison4, title: "Villas" },
];

const Propertylist = () => {
  return (
    <div className="property-list">
      <h2>Browse by property type</h2>
      <div className="property-container">
        {propertyData.map((property) => (
          <Propertytype key={property.id} image={property.image} title={property.title} />
        ))}
      </div>
    </div>
  );
};

export default Propertylist;
