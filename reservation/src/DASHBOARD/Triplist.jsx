import React, { useState } from "react";
import "../DASHBOARD/Dashboard_Style/view.css";

const TripList = () => {
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
      <button className="new-trip-btn">+ New Trip</button>
    </div>
  );
};

export default TripList;
