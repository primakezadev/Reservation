import React from "react";
import Properties from "./Properties"
import Dealsofweekend from "./Dealsofweekend";
import RentalForm from "./RentalForm";




 export default function Rentals(){
    return(
        <div>
           
            <Properties />
            <Dealsofweekend />
            <RentalForm />
          
        </div>
    )
 }