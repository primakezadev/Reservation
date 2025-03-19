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

export default function Home(){
  return(
    
    <div className="home-container">
   
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Live the dream in a holiday home</h1>
          <p>Choose from houses, villas, chalets and more</p>
          <button className="book-btn">Book yours</button>
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

           <div className="trending-destination">
            <div className="trending-container">
            <h1 className="trend">Trending Destination</h1>

            <div className="trending-images">
            <img src={dar} alt="dar" className="daras" />
            <img src={convect} alt="convect" className="convect" />
            <img src={addis} alt="addis" className="addis" />
            <img src={bisate} alt="bisate" className="bisate" />
            </div>
            </div>
          
           <div className="top-hotels">
            <h2 className="hotels">Top Hotels</h2>
            <Products />
           </div>
   
          <div>
             <h2 className="luxury-hotels">Luxury Hotels</h2>
             <Luxury />
            </div>
            <img src={dr1} alt="dr1" />
           
            </div>
            </div> 
           
  )
}