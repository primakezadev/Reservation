// src/components/StayCard.js
import React from "react";
import "../Styles/Featurecard.css";

const StayCard = ({ image, title }) => {
  return (
    <div className="stay-card">
      <img src={image} alt={title} className="stay-image" />
      <p className="stay-title">{title}</p>
    </div>
  );
};

export default StayCard;
