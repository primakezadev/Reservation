// src/components/FeatureSection.js
import React from "react";

import { FaMoon, FaTag, FaCalendarAlt } from "react-icons/fa";
import "../Styles/Featurecard.css";
import Featuresection from "./Featuresection"

const features = [
  { icon: <FaMoon />, text: "Earn rewards on every night you stay" },
  { icon: <FaTag />, text: "Save more with Member Prices" },
  { icon: <FaCalendarAlt />, text: "Free cancellation options if plans change" },
];

const Featurecard = () => {
  return (
    <div className="feature-section">
      <div className="feature-text">
        <h2>Find and book your perfect stay</h2>
      </div>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <features key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
      <Featuresection />
    </div>
  );
};

export default Featurecard;
