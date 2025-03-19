import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Notify } from "notiflix";
import logo from "../assets/images/logo.png";
import "../Styles/Register.css";

const API_URL = "http://localhost:5001";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const onSubmit = async (data) => {
    if (!agreeToTerms) {
      setErrorMessage("Please agree to the terms");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      console.log("Sending signup request with data:", JSON.stringify(data, null, 2));

      const response = await axios.post(`${API_URL}/user/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "user",
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      console.log("Register response:", response);

      Notify.success("Registration Successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred");
      Notify.failure(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <img src={logo} alt="logo" className="logo" />
      <h2>Create an Account</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name*</label>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}

        <label>Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}

        <label>Password*</label>
        <input
          type="password"
          placeholder="Create a password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error-text">{errors.password.message}</p>}

        <label>
          <input type="checkbox" onChange={() => setAgreeToTerms(!agreeToTerms)} />
          I agree to the terms and conditions
        </label>

        <button type="submit" className="register-btn" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="register-login">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
