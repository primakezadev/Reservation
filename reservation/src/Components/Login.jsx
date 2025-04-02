// LoginForm.js (Updated React Component)

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Notify } from "notiflix";
import logo from "../assets/images/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import "../Styles/Signin.css";

const API_URL = "http://localhost:5001";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      console.log("Sending login request with data:", JSON.stringify(data, null, 2));

      const response = await axios.post(
        `${API_URL}/user/login`,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Login response:", response);

      const userToken = response.data;

      // Store user data and token
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("preferredLanguage", "en");

      if (userToken.token) {
        localStorage.setItem("token", userToken.token);
      }

      if (userToken.user) {
        localStorage.setItem("userId", userToken.user.id || userToken.user._id);
        localStorage.setItem("userName", userToken.user.name);
        localStorage.setItem("role", userToken.user.role);
      }

      Notify.success("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg = error.response?.data?.message || "An error occurred";
      setErrorMessage(errorMsg);
      Notify.failure(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="logoy" />
      <h2>Welcome back!</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}

        <label>Password*</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error-text">{errors.password.message}</p>}

        <div className="remember-forgot">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/Forgotpassword" className="password">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="login-btn" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p className="login-register">
        Don't have an account? <Link to="/Register">Register here</Link>
      </p>

      <div className="social-login-container">
        <p className="social-login-text">Or sign up using</p>
        <div className="social-buttons">
          <button className="social-btn facebook">
          <FaSquareFacebook />
            <i className="fab fa-facebook-f"></i>
          </button>

          <button className="social-btn twitter">
          <FaSquareXTwitter />
            <i className="fab fa-twitter"></i>
          </button>

          <button className="social-btn google">
          <FaGoogle />
            <i className="fab fa-google"></i>
          </button>

        </div>
      </div>

    </div>
  );
};

export default LoginForm;