import React from "react";
import Properties from "./Properties"
import Dealsofweekend from "./Dealsofweekend";
import RentalForm from "./RentalForm";
import RentalDescription from "./RentalDescription";




 
 export default function Rentals(){
    return(
        <div>
             <RentalDescription />
            <Properties />
            <Dealsofweekend />
            <RentalForm />
          
        </div>
    )
 }