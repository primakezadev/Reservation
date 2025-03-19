import React, { useState } from "react";
import '../DASHBOARD/Dashboard_Style/Favorite.css'
import Settinglist from "./Settinglist";





export default function SettingsPage() {
  const [username, setUsername] = useState("Prima");
  const [email, setEmail] = useState("prima@example.com");
  const[Password, setPassword] = useState("*******");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">
        <Settinglist />
      <div className="settings-card">
        <h2 className="settings-title">Settings</h2>
        <div className="settings-content">
          <div>
            <label className="settings-label">Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="settings-input"
            />
          </div>
          <div>
            <label className="settings-label">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="settings-input"
            />
          </div>
          <div>
            <label className="settings-label">Password</label>
            <input 
              type="email" 
              value={Password} 
              onChange={(e) => setEmail(e.target.value)} 
              className="settings-input"
            />
          </div>
          <div className="settings-toggle">
            <span className="settings-label">Enable Notifications</span>
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)} 
              className="settings-checkbox"
            />
          </div>
          <div className="settings-toggle">
            <span className="settings-label">Dark Mode</span>
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)} 
              className="settings-checkbox"
            />
          </div>
          <button 
            className="settings-button" 
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
