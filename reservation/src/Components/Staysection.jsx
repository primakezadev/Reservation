import React from "react";
import StayCard from "./StayCard"; // ✅ Ensure this is correctly imported
import zanz from "../assets/images/zanz.jpeg";
import inclu from "../assets/images/inclu.jpeg";
import pool from "../assets/images/pool.jpeg";
import rresort from "../assets/images/rresort.jpeg";


import "../Styles/Featurecard.css";

const stays = [
  { id: 1, image: zanz, title: "Sea view" },
  { id: 2, image: inclu, title: "All inclusive" },
  { id: 3, image: pool, title: "Pool" },
  { id: 4, image: rresort, title: "Resort" },
 
];

const StaySection = () => {
  return (
    <div className="stay-section">
      <h2 className="stay-header">Discover your new favourite stay</h2>
      <div className="stay-list">
        {stays.map((stay) => (
          <StayCard key={stay.id} image={stay.image} title={stay.title} />
        ))}
      </div>
    </div>
  );
};

export default StaySection;
