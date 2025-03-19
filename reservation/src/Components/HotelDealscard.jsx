import React from "react";
import HotelCards from "./HotelCards"; // Import HotelCard component
import "../Styles/Hoteldealcard.css"; // Import CSS file
import boutique from "../assets/images/boutique.jpeg"
import nyungwe from "../assets/images/nyungwe.jpeg"
import lake from "../assets/images/lake.jpeg"
import ndaru from "../assets/images/ndaru.jpeg"

// Hotel data array
const hotelDeals = [
  {
    id: 1,
    image: boutique,
    location: "Kigali",
    name: "Mythos Boutique Hotel",
    rating: 9.6,
    review: "Exceptional",
    reviewsCount: 15,
    price: 136,
    oldPrice: 169,
    totalPrice: 320,
    discount: "20% off",
  },
  {
    id: 2,
    image: nyungwe,
    location: "Gisakura",
    name: "Nyungwe Top View Hotel",
    rating: 8.0,
    review: "Very good",
    reviewsCount: 12,
    price: 243,
    oldPrice: 323,
    totalPrice: 572,
    discount: "Member Price available",
  },
  {
    id: 3,
    image: lake,
    location: "Mbarara",
    name: "Lake View Resort Hotel",
    rating: 8.0,
    review: "Very good",
    reviewsCount: 12,
    price: 94,
    oldPrice: 123,
    totalPrice: 223,
    discount: "Member Price available",
  },
  {
    id: 4,
    image: ndaru,
    location: "Kigali",
    name: "Ndaru Luxury Suites",
    rating: 8.8,
    review: "Excellent",
    reviewsCount: 3,
    price: 92,
    oldPrice: 142,
    totalPrice: 218,
    discount: "35% off",
  },
];

const HotelDeals = () => {
  return (
    <div className="hotel-deals">
      <h2 className="deals-header">Top deals for a last-minute getaway</h2>
      <p className="deals-subtitle">
        Showing deals for: <strong>19 Mar - 21 Mar</strong>
      </p>
      <div className="hotel-list">
        {hotelDeals.map((hotel) => (
          <HotelCards key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <button className="see-all-deals">See all deals</button>
    </div>
  );
};

export default HotelDeals;
