import React from 'react';
import logo from "../assets/images/logo.png"
import { CiSearch } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { FaHotel } from "react-icons/fa";
import '../DASHBOARD/Dashboard_Style/Dashboardnavbar.css';

function DashboardNavbar() {
  return (
    <nav className="navbar">
    <h2 className="title">Find Hotel to stay</h2>
    <FaHotel  className='hotel-icon'/>
    <div className="search-bar">
      <CiSearch size={20} className="search-icon" />
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
    <div className="navbar-icons">
      <IoIosSettings  className="icon5" />
      <CiBellOn   className="icon6" />
      <div className="profile">
        <img
          src={logo}
          alt="Profile"
          className="profile-pic"
        />
  
       
       
      </div>
    </div>

  </nav>
  );
}

export default DashboardNavbar;