import React from "react";
import "../Styles/Tourrwanda.css"; 
import explore from "../assets/images/explore.jpeg"
import gorilla from "../assets/images/gorilla.jpeg"

const Tourrwanda = () => {
  const tours = [
    {
      id: 1,
      title: "4-Day Rwanda Golden Monkey Trek and Bisoke Hike Trip",
      price: "$1,596 pp (USD)",
      type: "Private tour • Mid-range • Lodge & Hotel",
      visit: "Kigali (Start), Volcanoes NP (Gorillas), Mt Bisoke (Virunga Mountains), Kigali (End)",
      agency: "Hermosa Life Tours and Travel",
      rating: "5.0",
      reviews: "166 Reviews",
      image: explore,
    },
    {
      id: 2,
      title: "3-Day Rwanda Primates Trekking for Foreigners",
      price: "$2,962 pp (USD)",
      type: "Private tour • Mid-range • Lodge",
      visit: "Kigali (Start), Genocide Memorial (Kigali), Volcanoes NP (Gorillas), Kigali (End)",
      agency: "Silverbird Tours Agency",
      rating: "4.9",
      reviews: "28 Reviews",
      image: gorilla,
    },
  ];

  return (
    <div className="tour-container">
      <h2>Rwanda Gorilla Trekking & Safari Tours</h2>
      <div className="tour-grid">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p className="tour-price">{tour.price}</p>
              <p className="tour-type">{tour.type}</p>
              <p className="tour-visit">
                <strong>You Visit:</strong> {tour.visit}
              </p>
              <div className="tour-footer">
                <span className="tour-agency">{tour.agency}</span>
                <span className="tour-rating">⭐ {tour.rating} /5 - {tour.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tourrwanda;
