import React from "react";
import "../Admin-Dashboard/Admin-Styles/Recently.css"; // Import CSS file
import kate from "../assets/images/kate.jpeg"
import star from "../assets/images/star.jpeg"
import tyla from "../assets/images/tyla.jpeg"

const RecentEnquiries = () => {
  const enquiries = [
    { name: "Micheal M", category: "Bookings", avatar: kate },
    { name: "Peterson K", category: "Inquiries", avatar: star },
    { name: "Johnson T", category: "Payments", avatar: tyla},
    { name: "Albert Q", category: "Checkout", avatar: kate},
    { name: "Hendy W", category: "Cancellations", avatar: tyla },
  ];

  return (
    <div className="enquiries-container">
      <h2>Recent Enquiries</h2>
      <div className="enquiries-grid">
        {enquiries.map((enquiry, index) => (
          <div key={index} className="enquiry-card">
            <img src={enquiry.avatar} alt={enquiry.name} className="avatar" />
            <div className="info">
              <span className={`category ${enquiry.category.toLowerCase()}`}>
                {enquiry.category}
              </span>
              <h4>{enquiry.name}</h4>
              <a href="#" className="view-message">VIEW MESSAGE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEnquiries;
