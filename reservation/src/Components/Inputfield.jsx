import React from "react";
import "../Styles/Signin.css";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required />
    </div>
  );
};

export default InputField;
