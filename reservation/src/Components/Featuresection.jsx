// src/components/FeatureCard.js
import React from "react";
import "../Styles/Featurecard.css";
// src/components/FeatureCard.js

import { FaMoon, FaTag, FaCalendarAlt } from "react-icons/fa";


const features = [
  { id: 1, icon: <FaMoon />, text: "Earn rewards on every night you stay" },
  { id: 2, icon: <FaTag />, text: "Save more with Member Prices" },
  { id: 3, icon: <FaCalendarAlt />, text: "Free cancellation options if plans change" },
];

const Featuresection = () => {
  return (
    <div className="feature-cards">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <span className="icon">{feature.icon}</span>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Featuresection;

