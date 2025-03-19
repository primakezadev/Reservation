import React from "react";  
import maison1 from "../assets/images/maison1.jpeg"
import maison2 from "../assets/images/maison2.jpeg"
import maison3 from "../assets/images/maison3.jpeg"
import "../Styles/Inspiration.css";
  
  
  
  const travelInspirationData = [
    {
      image:maison1,
      title: "Kigali's Eve in Kigali City",
      description: "Ring in the new year with iconic moments and unforgettable memories in New York City."
    },
    {
      image: maison2,
      title: "6 best ryokans in Zanzibar to rejuvenate yourself",
      description: "Discover unmissable ryokans to relax and unwind in style."
    },
    {
      image: maison3,
      title: "7 best places in East Africa to celebrate Christmas",
      description: "Discover the shimmering lights and festive sights of Asia’s holiday season."
    }
  ];
  
  
  
  export default function Inspiration() {
    return (
      <div className="travel-container">
        <h2 className="travel-title">Get inspiration for your next trip</h2>
        <div className="travel-grid">
          {travelInspirationData.map((item, index) => (
            <div key={index} className="travel-card">
              <img src={item.image} alt={item.title} className="travel-image" />
              <div className="travel-content">
                <h3 className="travel-heading">{item.title}</h3>
                <p className="travel-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  