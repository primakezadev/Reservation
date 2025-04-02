import React, { useState, useEffect } from "react";

const Bookings = () => {
  // Simulating bookings data
  const [reservations, setReservations] = useState([]);

  // Fetch reservations (Replace with actual API call if needed)
  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Bookings</h2>

        {reservations.length === 0 ? (
          <p className="text-gray-600">No bookings found.</p>
        ) : (
          <ul className="space-y-4">
            {reservations.map((booking, index) => (
              <li key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
                <p><strong>Guest Name:</strong> {booking.name}</p>
                <p><strong>Room Type:</strong> {booking.roomType}</p>
                <p><strong>Check-in:</strong> {booking.checkInDate}</p>
                <p><strong>Check-out:</strong> {booking.checkOutDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bookings;
