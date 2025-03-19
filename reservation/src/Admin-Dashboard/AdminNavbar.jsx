import React from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import "../Admin-Dashboard/Admin-Styles/AdminNavbar.css";
import logo from "../assets/images/logo.png"

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="nav-left">
        <span className="breadcrumb">
          <span className="dashboard-text">Dashboard</span> 
        </span>
        
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="Search anything" />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="nav-icons">
          <button className="icon-btn">
            <FaBell />
          </button>
          <button className="icon-btn">
            <FaCog />
          </button>
        </div>

        <div className="user-profile">
          <img
            src={logo} // Placeholder image
            alt="User"
            className="user-avatar"
          />
          <div className="user-info">
            <span className="user-name">EACReservation</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
