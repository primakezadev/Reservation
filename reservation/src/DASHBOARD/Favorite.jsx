import React from "react";
import pic2 from "../assets/images/pic2.jpeg";
import marriot from "../assets/images/marriot.jpeg";
import onomo from "../assets/images/onomo.jpeg";
import kigali from "../assets/images/kigali.jpg";
import pic1 from "../assets/images/pic1.jpeg";
import pic4 from "../assets/images/pic4.jpeg"
import "../DASHBOARD/Dashboard_Style/Favorite.css"


const cities = [
  { name: "Nairobi",  image: pic2 },
  { name: "Kampala",  image: marriot },
  { name: "Bujumbura",  image: onomo },
  { name: "Kigali",  image: kigali },
  { name: "Zanzibar", image: pic1 },
  { name: "Addis Ababa", image: pic4},
];

const Favorite = () => {
  return (
    <div className="city-gridfav">
      {cities.map((city, index) => (
        <div key={index} className="city-card" style={{ backgroundImage: `url(${city.image})` }}>
          <div className="city-label">
            {city.name} <span>{city.flag}</span> 
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;