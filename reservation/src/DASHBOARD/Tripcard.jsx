import React from "react";
import dr1 from "../assets/images/dr1.jpeg"
import dr2 from "../assets/images/dr2.jpeg"
import dr3 from "../assets/images/dr3.jpeg"
import mik1 from "../assets/images/mik1.jpeg"
import mik2 from "../assets/images/mik2.jpeg"
import mik3 from "../assets/images/mik3.jpeg"
import mille from "../assets/images/mille.jpeg"
import onomo from "../assets/images/onomo.jpeg"
import serena from "../assets/images/serena.jpeg"
import "..//DASHBOARD/Dashboard_Style/view.css";


const trips = [
  {
    id: 1,
    image: dr1,
    title: "kilimanjaro",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "08 Dec 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 2,
   image: dr2,
    title: "kinshasa",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "12 Dec 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 3,
   image: dr3,
    title: "dar es salam",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "24 Dec 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 4,
   image: mik1,
    title: "muhazi kigali",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "02 jan 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 5,
   image: mik2,
    title: "serengeti",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "15 jan 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 6,
   image: mik3,
    title: "Mount Bromo",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "25 jan 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 7,
   image: mille,
    title: "luio avac",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "05 feb 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 8,
   image: onomo,
    title: "noir ateh",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "12 feb 8:10 PM",
    price: "$248/Day",
  },
  {
    id: 9,
   image: serena,
    title: "bisate lodge",
    airline: "Citilink",
    location: "Jl. Mawar No.2, Ponorogo",
    date: "20 feb 8:10 PM",
    price: "$248/Day",
  },
];

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.title} className="trip-image" />
      <h3 className="trip-title">{trip.title}</h3>
      <p className="trip-airline">{trip.airline}</p>
      <p className="trip-location">{trip.location}</p>
      <div className="trip-details">
        <span className="trip-date">{trip.date}</span>
        <span className="trip-price">{trip.price}</span>
      </div>
    </div>
  );
};

const TripCards = () => {
  return (
    <div className="trip-cards-container">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default TripCards;
