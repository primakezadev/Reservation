import React, { useState } from "react";
import "../DASHBOARD/Dashboard_Style/Favorite.css";

const Settinglist = () => {
  const [activeTab, setActiveTab] = useState("Account Settings");
  const tabs = ["Account setting", "Login&Security", "Interface"];

  return (
    <div className="setting-list-container">
      
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
     
    </div>
  );
};

export default Settinglist;
