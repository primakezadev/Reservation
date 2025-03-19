import React from "react";
import "../Styles/Tourkenya.css";
import tanzaa from "../assets/images/tanzaa.jpeg"
import tanz from "../assets/images/tanz.jpeg"
import zanzi from "../assets/images/zanzi.jpeg"

const tourData = [
  {
    title: "5-Day Luxurious Wildlife Experience in Kenya",
    price: "$1,650 to $2,200",
    type: "Private tour • Luxury • Lodge & Tented Camp",
    visit: "Nairobi (Start), Masai Mara NR, Lake Nakuru NP, Lake Naivasha (Naivasha), Nairobi (End)",
    company: "Peak Season Africa Safaris",
    rating: 5.0,
    reviews: 19,
    image: tanzaa,
  },
  {
    title: "6-Day Roaring Kenya Best Safari (Mara, Nakuru, Amboseli)",
    price: "$759 to $990",
    type: "Shared tour (max 7 people per vehicle) • Budget • Tented Camp & Hotel",
    visit: "Nairobi (Start), Masai Mara NR, Lake Nakuru NP, Amboseli NP, Nairobi (End)",
    company: "Baboon Budget Safaris",
    rating: 4.7,
    reviews: 220,
    image:tanz,
  },
  {
    title: "6-Day Let's Go Masai Mara Nakuru and Amboseli in a Group",
    price: "$880 to $1,100",
    type: "Shared tour (max 8 people per vehicle) • Budget • Lodge & Tented Camp",
    visit: "Nairobi (Start), Masai Mara NR, Lake Nakuru NP, Amboseli NP, Nairobi (End)",
    company: "Jungleroam Safaris",
    rating: 5.0,
    reviews: 351,
    image: zanzi,
  },
];

// Safari Tour Card Component
const SafariTourCard = ({ tour }) => {
  return (
    <div className="safari-card">
      <img src={tour.image} alt={tour.title} className="safari-image" />
      <div className="safari-info">
        <h3>{tour.title}</h3>
        <p className="price">{tour.price} pp (USD)</p>
        <p className="details">{tour.type}</p>
        <p className="visit">You Visit: {tour.visit}</p>
        <p className="company">{tour.company}</p>
        <p className="rating">⭐ {tour.rating} / 5 - {tour.reviews} Reviews</p>
      </div>
    </div>
  );
};

// Main Safari Tours Component
const SafariTours = () => {
  return (
    <div className="safari-container">
      <h2>Safari Tours to Tanzania</h2>
      <div className="safari-grid">
        {tourData.map((tour, index) => (
          <SafariTourCard key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default SafariTours;
