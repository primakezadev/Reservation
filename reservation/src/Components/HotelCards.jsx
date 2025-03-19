import React from "react";
import "../Styles/HotelDeals.css"; // Use the same CSS file

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <p className="hotel-location">{hotel.location}</p>
        <h3 className="hotel-name">{hotel.name}</h3>
        <div className="hotel-rating">
          <span className="rating-badge">{hotel.rating}</span>
          <span className="rating-text">
            {hotel.review} ({hotel.reviewsCount} reviews)
          </span>
        </div>
        <p className="hotel-price">
          <span className="current-price">${hotel.price}</span>
          <span className="old-price">${hotel.oldPrice}</span>
        </p>
        <p className="total-price">${hotel.totalPrice} total</p>
        <p className="includes">Includes taxes & fees</p>
        <span className="hotel-discount">{hotel.discount}</span>
      </div>
    </div>
  );
};

export default HotelCard;
