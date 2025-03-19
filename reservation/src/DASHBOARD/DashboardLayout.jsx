import React from "react";
import Dashboardsidebar from "./Dashboardsidebar"; 
import DashboardNavbar from "./DashboardNavbar";  

import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Dashboardsidebar />
      <DashboardNavbar /> 
        <Outlet />
      </div>
    
  );
}

export default DashboardLayout;
