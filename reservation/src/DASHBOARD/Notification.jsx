import React from "react";
import '../DASHBOARD/Dashboard_Style/Notification.css';

const notifications = [
  { id: 1, title: "5 Product Sold!", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: "💰", date: "Today" },
  { id: 2, title: "Invoice for UI Kits", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: "📜", date: "Today" },
  { id: 3, title: "Carlie Smith", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: null, date: "Today" },
  { id: 4, title: "Income $10,000", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: "💵", date: "Today" },
  { id: 5, title: "5 Product Sold!", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: "💰", date: "Yesterday, 8 August 2022" },
  { id: 6, title: "Invoice for UI Kits", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: "📜", date: "Yesterday, 8 August 2022" },
  { id: 7, title: "Carlie Smith", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "14.36", icon: null, date: "Yesterday, 8 August 2022" }
];

const NotificationItem = ({ title, description, time, icon }) => (
  <div className="notification-container">
    <div className="notification-item">
      <p className="notification-title">{title}</p>
      <br></br>
      <p className="notification-description">{description}</p>
      <br></br>
    </div>
    <p className="notification-time">{time}</p>
  </div>
);

const Notification = () => (
  <div className="notification-content">
    <h2 className="notification-paragraph">Notification</h2>

    <div className="button-container">
      <button className="notification-button">All</button>
      <button className="notification-unread">
        Unread (6)
      </button>
    </div>

    {["Today", "Yesterday, 8 August 2022"].map((date) => (
      <div key={date} className="notify">
        <h3 className="notification-date">{date}</h3>
        {notifications
          .filter((item) => item.date === date)
          .map((item) => (
            <NotificationItem key={item.id} {...item} />
          ))}
      </div>
    ))}
  </div>
);

export default Notification;
