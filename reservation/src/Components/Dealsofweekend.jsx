import React from "react";
import "../Styles/HotelDeals.css";
import onomo from "../assets/images/onomo.jpeg" 
import marriot from "../assets/images/marriot.jpeg"
import addis from "../assets/images/addis.jpg"
import bur1 from "../assets/images/bur1.jpeg"

const hotels = [
  {
    id: 1,
    name: "Gorillas Lake Kivu Hotel",
    location: "Gisenyi, Rwanda",
    image: onomo, // Replace with real image URL
    rating: 7.1,
    reviewText: "Good",
    reviews: 190,
    oldPrice: 248,
    newPrice: 211,
    deal: "Early 2025 Deal",
  },
  {
    id: 2,
    name: "KIGALI GARDEN VILLA HOMES",
    location: "Nairobi, Kenya",
    image:marriot,
    rating: 8.0,
    reviewText: "Very Good",
    reviews: 16,
    oldPrice: 54,
    newPrice: 41,
    deal: "Early 2025 Deal",
  },
  {
    id: 3,
    name: "Ruhondo Beach Resort",
    location: "Zanzibar, Tanzania",
    image: addis,
    rating: 8.0,
    reviewText: "Very Good",
    reviews: 33,
    oldPrice: 180,
    newPrice: 162,
    deal: "Early 2025 Deal",
  },
  {
    id: 4,
    name: "CLEMENT MOTEL",
    location: "Kampala, Uganda",
    image:bur1,
    rating: 8.7,
    reviewText: "Excellent",
    reviews: 19,
    oldPrice: 60,
    newPrice: 48,
    deal: "Early 2025 Deal",
  },
];

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-content">
        <span className="genius-badge">Genius</span>
        <h3 className="hotel-name">{hotel.name}</h3>
        <p className="hotel-location">{hotel.location}</p>
        <div className="hotel-rating">
          <span className="rating-score">{hotel.rating}</span>
          <span className="rating-text">
            {hotel.reviewText} · {hotel.reviews} reviews
          </span>
        </div>
        {hotel.deal && <span className="hotel-deal">{hotel.deal}</span>}
        <p className="hotel-price">
          2 nights <span className="old-price">US${hotel.oldPrice}</span> <b>US${hotel.newPrice}</b>
        </p>
      </div>
    </div>
  );
};

const HotelDeals = () => {
  return (
    <div className="hotel-container">
      <h2 className="section-title1">Deals for the weekend</h2>
      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelDeals;
