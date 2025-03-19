import React from "react";
import convect from "../assets/images/convect.jpg"
import mik2 from "../assets/images/mik2.jpeg"
import explore from "../assets/images/explore.jpeg"
import pic1 from "../assets/images/pic1.jpeg"
import pic2 from "../assets/images/pic2.jpeg"
import mille from "../assets/images/mille.jpeg"
import Inspiration from "./Inspiration"

import '../Styles/About.css'
   

export default function About(){
    return(
    <div>
        <div>
            <img src={convect} alt="convect" className="conv" />
            <img src={mik2} alt="mik" className="conv" />
     <img src={explore} alt="explore" className="conv" /> </div> 
     <section className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        Providing all reservation solutions, East African Corporate Reservation is one step away from all your traveling solutions for you and your loved ones. 
        Our main products are hotels & apartments, car hire, vocational homes, and tour packages. Our products are designed to ensure that our customers have a seamless 
        experience either on corporate travels or vacations.
      </p>
      <p className="about-text">
        Having over 1,500 hotels in East Africa, we choose our partners to serve our customers at our best with effectiveness and efficiency. Our user-friendly website 
        was designed to allow our audience to access their desired destinations either traveling for corporate business, visits, or vacations. 
        Here are our main offered solutions that drive our customers to trust and work with us:
      </p>
      <ul className="about-list">
        <li>We are committed to the highest standards of quality and service at a convenient and affordable price.</li>
        <li>We offer various options while innovating to create new experiences for our clients to enjoy.</li>
        <li>Our platform is user-friendly and it allows our clients to navigate through various options with simplicity and perfection.</li>
        <li>The best tour package itineraries are our main uniqueness. We are committed to partnering with the best tour companies to serve the best itineraries to our customers.</li>
      </ul>
      <p className="about-text">
        In everything we do, we always align with our mission: to create value for customers by meeting their objectives and offering cost-effective solutions 
        to our partners by boosting their visibility.
      </p>
      <p className="about-text">
        EACR team understands the value of your time and is willing to take the 99% steps for you. All you need to do is to make a one-click request for your reservation and the rest will be to us. 
        From the point of making a reservation to reaching your destination, we ensure a smooth process and a stress-free journey.
      </p>
      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ⬆
      </button>
      <div className="image-info">
       
       <img src={pic1} alt="pic" className="pic1" />
       <img src={pic2} alt="pic" className="pic2" />
       <img src={mille} alt="pic" className="pica" />
   </div>
   <Inspiration />
    </section> 
   
  
           
        </div>
    )
}