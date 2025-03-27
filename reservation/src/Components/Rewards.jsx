import React from "react";
import "../Styles/Rewards.css";
import { FaCar, FaLock, FaInfoCircle } from "react-icons/fa";

const GeniusRewards = () => {
  const rewards = [
    {
      title: "10% discounts on stays",
      description: "Enjoy discounts at participating properties worldwide",
      icon: <FaInfoCircle />,
    },
    {
      title: "10% off rental cars",
      description: "Save on select rental cars",
      icon: <FaCar />,
    },
    {
      title: "10-15% discounts on stays",
      description: "Complete 5 bookings to unlock Genius Level 2",
      icon: <FaLock />,
      locked: true,
    },
  ];

  return (
    <div className="genius-rewards">
        
      <div className="genius-card">
      
        <h3>Genius</h3>
        <p><strong>Keza</strong>, you're at <strong>Genius Level 1</strong> in our loyalty programme</p>
      </div>

      <div className="rewards-list">
        {rewards.map((reward, index) => (
          <div key={index} className={`reward-card ${reward.locked ? "locked" : ""}`}>
            <div className="reward-header">
              <h4>{reward.title}</h4>
              <span className="reward-icon">{reward.icon}</span>
            </div>
            <p>{reward.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeniusRewards;
