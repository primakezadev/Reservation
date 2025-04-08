import React from "react";
import "../Admin-Dashboard/Admin-Styles/Bookingdetails.css";
import kate from "../assets/images/kate.jpeg"
import star from "../assets/images/star.jpeg"
import tyla  from "../assets/images/tyla.jpeg"



const BookingDetails = () => {
  const bookings = [
    {
      date: "14.02.2023",
      customer: "Mitchel Johnson",
      avatar: kate,
      persons: "2 adults x 1 Child",
      phone: "+15 256 896 8856",
      checkIn: "15-02-2023 11:00am",
      checkOut: "16-02-2023 12:00pm",
      paymentStatus: "Received",
    },
    {
      date: "16.02.2023",
      customer: "Robert Afflick",
      avatar: star, 
      persons: "2 adults x 2 Childs",
      phone: "+11 509 854 8986",
      checkIn: "17-02-2023 09:00am",
      checkOut: "19-02-2023 11:00am",
      paymentStatus: "Received",
    },
    {
      date: "15.02.2023",
      customer: "Chris Hemsworth",
      avatar: tyla, 
      persons: "2 adults",
      phone: "+52 745 836 1164",
      checkIn: "17-02-2023",
      checkOut: "18-02-2023",
      paymentStatus: "Pending",
    },
    {
        date: "15.02.2023",
        customer: "Chris Hemsworth",
        avatar: tyla, 
        persons: "2 adults",
        phone: "+52 745 836 1164",
        checkIn: "17-02-2023",
        checkOut: "18-02-2023",
        paymentStatus: "Pending",
      },
  ];

  return (
    <div className="booking-container">
      <h2>Booking Details</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking Date</th>
            <th>Customer</th>
            <th>Persons</th>
            <th>Phone</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td className="customer-cell">
                <img src={booking.avatar} alt={booking.customer} className="avatar" />
                {booking.customer}
              </td>
              <td>{booking.persons}</td>
              <td>
                <a href={`tel:${booking.phone}`} className="phone-link">
                  {booking.phone}
                </a>
              </td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>
                <span className={`status ${booking.paymentStatus.toLowerCase()}`}>
                  {booking.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
