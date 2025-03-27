import React from 'react';
import "../Styles/Footer.css";
import facebook from "../assets/images/facebook.jpeg";
import { BsTwitterX } from "react-icons/bs";
import insta from "../assets/images/insta.jpeg"
import linkedin from "../assets/images/linkedin.png"
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="footer">
       <div className='footer-info'>
        <h2 className='ear'>EACReservation ( EACR )</h2>
        <p className='paragraph'>Thank you so much for <br></br>
            your valuable time
        </p>
        <div className='icon'>
         <img src={facebook} alt='facebook' className='facebook' />
        <BsTwitterX  className='icon2'/>
         <img src={insta} alt='insta' className='insta' />
         <img src={linkedin} alt='in' className='in' />
        </div>
       </div>
       <div className='footer-rem'>
        <h2>Explore</h2>
        <ul className="lists">
        <li><a href="/" className='li'>Home</a></li>
        <li><a href="/about" className='li' >About Us</a></li>
        <li><a href="/hotels" className='li'>Hotels</a></li>
        <li><a href="/rentals" className='li'>Rentals</a></li>
        <li><a href="/tours" className='li'>Tour Packages</a></li>
        <li><a href="/contact" className='li'>Contact</a></li>
        <li><a href="/register" className='li'>Register</a></li>
        <li ><a href="/login" className='li'>Login </a></li>
      </ul>
       </div>
       <div className='contact-info'>
        <h2>Contact-Info</h2>
        <IoCallOutline className='call' />
          <p className='phone'>+ 250 79 520 26 41</p>
          <IoCallOutline className='call' />
          <p className='phone'>+ 250 78 717 08 41</p>
          <CiMail className='mail' />
          <p className='gmail'>primakez@gmail.com</p>
          <p className='street'>Kigali, Kacyiru Street-103</p>
       </div>
       <div >
        <h2 className='subscribe-info'>Subscribe Us</h2>
        <p className='news'>Subscribe for the latest News</p>
        <input type="text" name="text" placeholder="Subscribe Now" className='sub' />
       
       <button className="subscribe-button">
          Subscribe
      <span className="bell-icon">🔔</span> 
      <span className="cursor-icon"></span>
    </button>
    </div>
        <p className='copy-right'>&copy; 2025 Prima's Design. All rights reserved.</p>  
    </div>
  );
}

export default Footer;
