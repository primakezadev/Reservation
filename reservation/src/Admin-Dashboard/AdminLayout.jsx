import React from "react";
import AdminSidebar from "./AdminSidebar"; 
import AdminNavbar from "./AdminNavbar";  

import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
            <AdminNavbar /> 
      <AdminSidebar />
  
        <Outlet />
      </div>
    
  );
}

export default AdminLayout;
