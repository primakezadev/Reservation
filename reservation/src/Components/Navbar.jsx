
import React from "react";
import { useState } from 'react';
import "../Styles/navbar.css";
import logo from "../assets/images/logo.png"


export default function Navbar(){
  const [model, setModel] = useState(false);

     const handleLoginForm = () => {
       setModel(!model);
      }
  return(
    <div className="navbar-container">
      <img src={logo} alt="logo" className="navbar-logo" />
         <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/hotels">Hotels</a></li>
         <li><a href="/rentals">Rentals</a></li>
          <li><a href="/tours">Tour Packages</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/Login" className="buttonNav">Login</a></li>
        </ul>
       
      

    </div>
  )
}
