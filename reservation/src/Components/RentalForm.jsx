import React, { useState } from "react";
import "../Styles/RentalsForm.css"; 

const RentalsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    countryOrigin: "",
    countryDestination: "",
    arrival: "",
    departure: "",
    services: [],
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="rentals-form-container">
      <form onSubmit={handleSubmit} className="rentals-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Second Name:</label>
            <input
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              placeholder="Second Name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country of Origin:</label>
            <input
              type="text"
              name="countryOrigin"
              value={formData.countryOrigin}
              onChange={handleChange}
              placeholder="Origin Country"
            />
          </div>
          <div className="form-group">
            <label>Destination Country:</label>
            <input
              type="text"
              name="countryDestination"
              value={formData.countryDestination}
              onChange={handleChange}
              placeholder="Destination Country"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Arrival:</label>
            <input
              type="date"
              name="arrival"
              value={formData.arrival}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Departure:</label>
            <input
              type="date"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Services:</label>
          <div className="checkbox-group">
            {["Hotel", "Tour packages", "Vocational rentals", "Car rentals", "Something else"].map((service) => (
              <label key={service}>
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Number of Guests:</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            placeholder="Enter number of guests"
          />
        </div>

        <div className="form-group">
          <label>Additional message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Comments"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default RentalsForm;
