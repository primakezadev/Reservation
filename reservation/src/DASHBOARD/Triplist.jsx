import React, { useState } from "react";
import "../DASHBOARD/Dashboard_Style/view.css";
import {useNavigate} from 'react-router-dom'

const TripList = () => {
    const navigate = useNavigate();
    
      const handletrip = () => {
        navigate ("/Hotels")
      }

  const [activeTab, setActiveTab] = useState("All Trips");
  const tabs = ["All Trips", "Pending Trips", "Approved"];

  return (
    <div className="trip-list-container">
      <div className="trip-tabs">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <button
      onClick={handletrip}
      className="new-trip-btn">+ New Trips</button>
    </div>
  );
};

export default TripList;
