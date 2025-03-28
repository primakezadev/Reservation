import React from "react";
import boutique from "../assets/images/boutique.jpeg"
import serena from "../assets/images/serena.jpeg"
import rresort from "../assets/images/rresort.jpeg"
import tanzaa from "../assets/images/tanzaa.jpeg"
import ug1 from "../assets/images/ug1.jpeg"
import "../Styles/RentalDescription.css";
import {useNavigate} from 'react-router-dom'

const rentalDescriptions = [
  {
    id: 1,
    name: "Luxury Villa",
    location: "Nairobi, Kenya",
    pricePerNight: 150,
    capacity: 6,
    amenities: ["Wi-Fi", "Swimming Pool", "Air Conditioning", "Private Parking"],
    description: "Experience a luxurious stay in this spacious villa with top-tier amenities and breathtaking views.",
    image: boutique,
  },
  {
    id: 2,
    name: "Cozy Apartment",
    location: "Kampala, Uganda",
    pricePerNight: 80,
    capacity: 4,
    amenities: ["Wi-Fi", "Kitchen", "Smart TV", "Balcony"],
    description: "A modern and cozy apartment perfect for small families or business travelers.",
    image: serena,
  },
  {
    id: 3,
    name: "Beachfront Cottage",
    location: "Mombasa, Kenya",
    pricePerNight: 120,
    capacity: 5,
    amenities: ["Beach Access", "Wi-Fi", "Outdoor Grill", "Pet Friendly"],
    description: "Wake up to the sound of waves in this charming beachfront cottage with private access to the ocean.",
    image: tanzaa,
  },
  {
    id: 4,
    name: "Mountain Cabin",
    location: "Arusha, Tanzania",
    pricePerNight: 90,
    capacity: 3,
    amenities: ["Fireplace", "Hiking Trails", "Wi-Fi", "Scenic Views"],
    description: "Escape to nature with this cozy mountain cabin offering stunning views and a peaceful atmosphere.",
    image: rresort,
  },
  {
    id: 5,
    name: "City Loft",
    location: "Kigali, Rwanda",
    pricePerNight: 100,
    capacity: 2,
    amenities: ["Wi-Fi", "Gym Access", "24/7 Security", "Work Desk"],
    description: "A stylish loft in the heart of the city, ideal for business travelers and digital nomads.",
    image: ug1,
  }
];

const RentalDescription = () => {
   const navigate = useNavigate();
  
    const handlereserve = () => {
      navigate ("/RentalForm")
    }
  return (
    <div className="rental-container">
      <h2 className="rental-title">Available Rentals</h2>
      <div className="rental-list">
        {rentalDescriptions.map((rental) => (
          <div key={rental.id} className="rental-card">
            <img src={rental.image} alt={rental.name} className="rental-image" />
            <div className="rental-info">
              <h3 className="rental-name">{rental.name}</h3>
              <p className="rental-location">{rental.location}</p>
              <p className="rental-price">${rental.pricePerNight} / night</p>
              <p className="rental-capacity">Capacity: {rental.capacity} guests</p>
              <p className="rental-amenities">
                Amenities: {rental.amenities.join(", ")}
              </p>
              <p className="rental-description">{rental.description}</p>
              <button
              onClick={handlereserve}
              className="rent-button">Reserve Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalDescription;
