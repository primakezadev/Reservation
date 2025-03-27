import React from "react";
import "../Admin-Dashboard/Admin-Styles/Availableroom.css"; // Import CSS file
import room1 from "../assets/images/room1.jpeg"
import room2 from "../assets/images/room1.jpeg"
import room3 from "../assets/images/room3.jpeg"
import room4 from "../assets/images/room4.jpeg"
import room5 from "../assets/images/room5.jpeg"

const AvailableRooms = () => {
  const rooms = [
    { id: 301, type: "A/C King", price: "$79/Night", image: room1},
    { id: 105, type: "A/C Queen", price: "$89/Night", image: room2},
    { id: 402, type: "A/C Double", price: "$95/Night", image: room3},
    { id: 281, type: "A/C King", price: "$92/Night", image: room4 },
    { id: 321, type: "A/C King", price: "$87/Night", image: room5 },
  ];

  return (
    <div className="available-rooms">
      <h2>Available Rooms</h2>
      <div className="room-container">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={`Room ${room.id}`} className="room-image" />
            <h3># No.{room.id}</h3>
            <p>{room.type}</p>
            <span className="price">{room.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableRooms;
