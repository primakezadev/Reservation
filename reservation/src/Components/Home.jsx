 import React from "react";
 import addis from "../assets/images/addis.jpg"
 import convect from "../assets/images/convect.jpg"
 import dar from "../assets/images/dar.jpg"
 import bisate from "../assets/images/bisate.jpeg"
 import Products from "./Products";
 import Luxury from "./Luxury";
 import dr1 from "../assets/images/dr1.jpeg"
import "../Styles/Home.css"
import Featurecard from "./Featurecard"
import Staysection from "./Staysection";
import HotelDealscard from "./HotelDealscard";
import Rewards from "./Rewards"
import {useNavigate} from 'react-router-dom'


export default function Home(){
  const navigate = useNavigate();

  const handlebook = () => {
    navigate ("RentalForm")
  }
  return(
    
    <div className="home-container">
   
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Live the dream in a holiday home</h1>
          <p>Choose from houses, villas, chalets and more</p>
          <button
          onClick={handlebook}
          className="book-btn">Book yours</button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-box-home">
        <input type="text" placeholder="Enter destination" className="search-input" />
        <input type="date" className="date-picker" />
        <input type="date" className="date-picker" />
        <select className="guest-select">
          <option>2 adults • 0 children • 1 room</option>
        </select>
        <button className="search-btn">Search</button>
      </div>
      <Featurecard />
       
            <div className="africa-content">
            <h1 className="africa">Explore Africa</h1>
            </div>
            <div className="button-info">
            <button className="but1">Hotels</button>
             <button className="but">Tour Package</button>
            <button className="but">Vacation Rental</button>
            <button className="but2">Reservation Enquiry</button>
           </div>
           <Staysection />
           <HotelDealscard />
           <Rewards />

           <div className="trending-destination">
          
           <div className="top-hotels">
           <h1>Top Hotels</h1>
            <Products />
           </div>
   
          <div className="luxur-hotel"> 
             <h1>Luxury Hotels</h1>
             <Luxury />
            </div>
          
      
           
            </div>
            </div> 
           
  )
}