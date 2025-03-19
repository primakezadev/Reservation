import React from "react";
import yaya1 from "../assets/images/yaya1.jpg"
import eldon from "../assets/images/eldon.jpg"
import "../Styles/PropertyList.css"; 

const properties = [
  {
    id: 1,
    name: "Yaya Apartments",
    location: "Nairobi, Kenya",
    image: yaya1, 
    rating: 9.0,
    reviewText: "Wonderful",
    reviews: 9,
  },
  {
    id: 2,
    name: "Eldon Suites & Apartments",
    location: "Nairobi, Kenya",
    image: eldon, 
    rating: 7.0,
    reviewText: "Good",
    reviews: 587,
  },
];

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} className="property-image" />
      <button className="favorite-btn">❤️</button>
      <div className="property-details">
        <h3 className="property-name">{property.name}</h3>
        <p className="property-location">{property.location}</p>
        <div className="rating">
          <span className="rating-score">{property.rating}</span>
          <span className="rating-text">{property.reviewText} · {property.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

const PropertyList = () => {
  return (
    <div className="property-container">
      <h2 className="section-title">Still interested in these properties?</h2>
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
