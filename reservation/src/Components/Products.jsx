import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa6";
import "../Styles/Hotels.css"; 
import pic4 from "../assets/images/pic4.jpeg";
import pic5 from "../assets/images/pic5.jpeg";
import tanzania from "../assets/images/tanzania.jpeg";
import kampala from "../assets/images/kampala.jpg";
import convect from "../assets/images/convect.jpg";
import bisate from "../assets/images/bisate.jpeg";
import mille from "../assets/images/mille.jpeg";
import serena from "../assets/images/serena.jpeg";


const Products = [
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
    location: "Musanze, Rwanda",
    name: "Bisate Lodge Rwanda",
    priceRange: "$225-Avg/Night",
    image: mille,
    rating: 5,
  },
  {
    id: 8,
    location: "Musanze, Rwanda",
    name: "Bisate Lodge Rwanda",
    priceRange: "$225-Avg/Night",
    image: serena,
    rating: 5,
  },
];

const ProductList = () => {
  return (
    <div className="hotels-container">
      {Products.map((product) => (
        <div className="hotel-card" key={product.id}>
          <img src={product.image} className="hotel-image" alt={product.name} />
          <p className="hotel-location">{product.location}</p>
          <h3 className="hotel-name">{product.name}</h3>
          <p className="hotel-price">{product.priceRange}</p>
          <div className="hotel-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                style={{
                  color: index < product.rating ? "rgb(224, 150, 11)" : "rgb(202, 202, 201)",
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
