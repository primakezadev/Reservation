import React from "react";
import { FaStar } from "react-icons/fa6";
import "../Styles/Luxury.css";

// Import images
import pic4 from "../assets/images/pic4.jpeg";
import pic5 from "../assets/images/pic5.jpeg";
import tanzania from "../assets/images/tanzania.jpeg";
import kampala from "../assets/images/kampala.jpg";
import convect from "../assets/images/convect.jpg";
import bisate from "../assets/images/bisate.jpeg";
import mille from "../assets/images/mille.jpeg";
import serena from "../assets/images/serena.jpeg";

const LuxuryHotels = [
  {
    id: 1,
    location: "Manyuki, Tanzania",
    name: "Check Inn Hotel",
    priceRange: "$1600-Avg/Night",
    image: pic4,
    rating: 5,
  },
  {
    id: 2,
    location: "Serengeti, Tanzania",
    name: "Serena Hotel Kigali",
    priceRange: "$1200-Avg/Night",
    image: pic5,
    rating: 5,
  },
  {
    id: 3,
    location: "Nairobi, Kenya",
    name: "Original Maasai Lodge",
    priceRange: "$225-Avg/Night",
    image: tanzania,
    rating: 5,
  },
  {
    id: 4,
    location: "Nairobi, Kenya",
    name: "Original Maasai Lodge",
    priceRange: "$225-Avg/Night",
    image: kampala,
    rating: 5,
  },
  {
    id: 5,
    location: "Arusha City, Tanzania",
    name: "Fun Retreat Resort",
    priceRange: "$225-Avg/Night",
    image: convect,
    rating: 5,
  },
  {
    id: 6,
    location: "Musanze, Rwanda",
    name: "Bisate Lodge Rwanda",
    priceRange: "$225-Avg/Night",
    image: bisate,
    rating: 5,
  },
  {
    id: 7,
    location: "Kigali City, Rwanda",
    name: "Kigali Mille Collines",
    priceRange: "$225-Avg/Night",
    image: mille,
    rating: 5,
  },
  {
    id: 8,
    location: "Kigali City, Rwanda",
    name: "Kigali Serena Hotel",
    priceRange: "$225-Avg/Night",
    image: serena,
    rating: 5,
  },
  {
    id: 9,
    location: "Nairobi, Kenya",
    name: "Original Maasai Lodge",
    priceRange: "$225-Avg/Night",
    image: kampala,
    rating: 5,
  },
];

const Luxury = () => {
  return (
    <div className="gallery-arrival">
      {LuxuryHotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <img src={hotel.image} className="hotel-image" alt={hotel.name} />
          <p className="hotel-location">{hotel.location}</p>
          <h3 className="hotel-name">{hotel.name}</h3>
          <p className="hotel-price">{hotel.priceRange}</p>
          <div className="hotel-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                style={{
                  color: index < hotel.rating ? "rgb(224, 150, 11)" : "rgb(202, 202, 201)",
                }}
              />
            ))}
            <span className="rating-number">5</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Luxury;
