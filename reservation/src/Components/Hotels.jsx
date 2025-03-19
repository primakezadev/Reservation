import React from "react";
import "../Styles/Hotels.css"
import Trend from "./Trend"
import Luxury from "./Luxury";

export default function Hotel(){
    return(
        <div className="hotels-container">
            <div className="hotels-info">
                <h1>Trending Destination</h1>
                <Trend />
                <div className="property">
                    <h1>Get Inspiration for your Next Trip</h1>
                    <Luxury />
                </div>
                </div>
        </div>
    )
}