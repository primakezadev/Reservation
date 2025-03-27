import React from "react";
import Dashboardsidebar from "./Dashboardsidebar"; 
import Dashboardnavbar from "./Dashboardnavbar.jsx";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      
      <Dashboardsidebar />
      <Dashboardnavbar /> 
        <Outlet />
      </div>
    
  );
}

export default DashboardLayout;
