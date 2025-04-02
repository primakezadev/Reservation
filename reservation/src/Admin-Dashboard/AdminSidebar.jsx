import React from "react";
import { Link } from "react-router-dom";
import { FaTh, FaCalendarAlt, FaFileInvoice, FaInbox, FaTicketAlt, FaDollarSign, FaImages, FaStar, FaCheckSquare } from "react-icons/fa";
import "../Admin-Dashboard/Admin-Styles/Adminsidebar.css"
import logo from "../assets/images/logo.png"

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        
         <img src={logo} alt="logo"  className="logo" />
        
      </div>

      <nav className="sidebar-nav">
        <Link to="/Adm-dashboard" className="sidebar-link">
          <FaTh className="icon" /> Adm-Dashboard
        </Link>
        <Link to="Booking" className="sidebar-link"> {/* Use relative path */}
        <FaCheckSquare className="icon" /> Bookings
        </Link>

        <Link to="/invoices" className="sidebar-link">
          <FaFileInvoice className="icon" /> Clients
        </Link>
        <Link to="/inbox" className="sidebar-link">
          <FaInbox className="icon" /> Inbox
        </Link>
        <Link to="/calendar" className="sidebar-link">
          <FaCalendarAlt className="icon" /> Calendar
        </Link>
        <Link to="/events" className="sidebar-link">
          <FaTicketAlt className="icon" /> Events
        </Link>
        <Link to="/financials" className="sidebar-link">
          <FaDollarSign className="icon" /> Financials
        </Link>
        <Link to="/gallery" className="sidebar-link">
          <FaImages className="icon" /> Hotels
        </Link>
        <Link to="/feedback" className="sidebar-link">
          <FaStar className="icon" /> Feedback
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
