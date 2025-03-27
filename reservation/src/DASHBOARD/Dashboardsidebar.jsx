import React from 'react';
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"; 
import { IoSettingsOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

 import '../DASHBOARD/Dashboard_Style/sidebar.css';

function Dashboardsidebar() {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <img src={logo} alt='logo' className='logo-image' />
     
      <ul className="nav-items">
       
        <li ><GoHome /><Link to="/Dashboard" >Dashboard</Link></li>
        <li><PiSquaresFourLight /> <Link to="/Dashboard/Expenses">Explore City&Tour</Link></li>
        <li><IoMdNotificationsOutline /><Link to="/dashboard/notification">Notification</Link></li>
        <li><MdFavoriteBorder /><Link to="/Dashboard/favorite">Favorites</Link></li>
        <li><IoSettingsOutline /><Link to="/Dashboard/setting">Setting</Link></li>
        
      </ul>
    </div>
  );
}

export default Dashboardsidebar;