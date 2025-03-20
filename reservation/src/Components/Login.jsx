import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.png";
import Inputfield from "./Inputfield";
import Button from "./Button";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa6";
import "../../styles/Signin.css";


const API_URL = "http://localhost:5001";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmitSignIn = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      console.log("Connecting to:", `${API_URL}/user/login`);

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

      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg = error.response?.data?.message || "An error occurred";
      setErrorMessage(errorMsg);
      alert(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h2>Welcome back!</h2>
      <p className="paragraph-information">Enter to get unlimited access to data & information.</p>

      <form className="form-info" onSubmit={handleSubmit(onSubmitSignIn)}>
        <Inputfield
          label="Email*"
          type="email"
          placeholder="Enter your mail address"
          {...register("email", { required: true })}
        />
        <Inputfield
          label="Password*"
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />

        <div className="remember-forgot">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/Forgotpassword" className="password">
            Forgot password?
          </Link>
        </div>

        <Button text={isLoading ? "Logging in..." : "Log In"} className="primary-btn" disabled={isLoading} />

        <div className="social-login-container">
          <p className="social-login-text">Or sign up using</p>
          <div className="social-buttons">
            <button className="social-btn facebook">
              <FaFacebook />
            </button>
            <button className="social-btn twitter">
              <FaTwitter />
            </button>
            <button className="social-btn google">
              <FaGoogle />
            </button>
          </div>
        </div>
      </form>

      <p className="register-text">
        Don't have an account? <Link to="/Register" className="register-here">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
