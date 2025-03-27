import React from "react";
import Expenses from "../Admin-Dashboard/Expenses"
import AvailableRooms from "./AvailableRooms";
 import BookingDetails from "./BookingDetails";
 import RecentEnquiry from "./RecentEnquiry";

export default function AdminView(){
    return(
        <div className="adminview-container">
            <div>
                <Expenses />
                <AvailableRooms />
                <BookingDetails />
                <RecentEnquiry />
            </div>

            
        </div>
    )
}