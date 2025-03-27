import React from "react";
import Tripcard from "./Tripcard";
import Triplist from "./Triplist";
import Donetripelist from "./Donetriplist";

import  "../DASHBOARD/Dashboard_Style/view.css"


function Dashboardview() {
    return (
        <div>
           
            <Triplist />
            <Tripcard />
            <Donetripelist />
           
           
        </div>
    )
}
export default Dashboardview;