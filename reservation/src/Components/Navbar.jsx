
import React from "react";
import { useState } from 'react';
import "../Styles/Navbar.css";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"; 


export default function Navbar(){
  const [model, setModel] = useState(false);

     const handleLoginForm = () => {
       setModel(!model);
      }
  return(
    <div className="navbar-container">
      <img src={logo} alt="logo" className="navbar-logo" />

         <ul className="nav-links">
         <Link to="/Home">home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/hotels">Hotels</Link>
         <Link to="/rentals">Rentals</Link>
          <Link to="/tours">Tour Packages</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Login" className="buttonNav">Login</Link>
        </ul>
       
      

    </div>
  )
}
