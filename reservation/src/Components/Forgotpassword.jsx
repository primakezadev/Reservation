import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Forgotpassword.css"; 
import logo from "../assets/images/logo.png"

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
        <img src={logo} alt="logo" className="logo" />
      <h2>Reset Your Password</h2>
      <p>Enter your email address, and we'll send you a link to reset your password.</p>
      
      <form className="forgot-password-form">
        <label>Enter an email address*</label>
        <input type="email" placeholder="Enter your email" required />
        
        <button type="submit" className="reset-btn">Request Reset Link</button>
      </form>

      <p className="forgot-login"><Link to="/login">Back to Login</Link></p>
    </div>
  );
};

export default ForgotPassword;
