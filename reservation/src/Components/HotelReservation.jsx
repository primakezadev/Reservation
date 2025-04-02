import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectItem } from "@/components/ui/select";
// import { DatePicker } from "@/components/ui/datepicker";

const HotelReservation = () => {
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: ""
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", reservation);
    alert("Reservation successful!");
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-2xl">

      <div>
        <h2 className="text-xl font-bold mb-4">Hotel Room Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div htmlFor="name">Full Name</div>
            <div id="name" name="name" value={reservation.name} onChange={handleChange} required />
          </div>
          <div>
            <div htmlFor="email">Email</div>
            <div id="email" name="email" type="email" value={reservation.email} onChange={handleChange} required />
          </div>
          <div>
            <div>Check-in Date</div>
            {/* <DatePicker name="checkIn" onChange={(date) => setReservation({ ...reservation, checkIn: date })} required /> */}
          </div>
          <div>
            <div>Check-out Date</div>
            {/* <DatePicker name="checkOut" onChange={(date) => setReservation({ ...reservation, checkOut: date })} required /> */}
          </div>
          <div>
            <div>Room Type</div>
            <select
                name="roomType"
                 value={reservation.roomType}
                  onChange={handleChange}
                     required
                           className="border rounded-md p-2 w-full"
                                               >
  <option value="">Select a room type</option>
  <option value="single">Single</option>
  <option value="double">Double</option>
  <option value="suite">Suite</option>
</select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Reserve Now</button>
        </form>
      </div>
    </div>
  );
};

export default HotelReservation;
