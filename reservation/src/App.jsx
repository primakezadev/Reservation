import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Hotels from "./Components/Hotels";
import Rentals from "./Components/Rentals";
import Tourpackage from "./Components/Tourpackage";
import Contact from "./Components/Contact";
 import Login from "./Components/Login";
 import Register from "./Components/Register";
 import ForgotPassword from "./Components/Forgotpassword";
import Dashboardlayout from "./DASHBOARD/DashboardLayout";
import Dashboardview from "./DASHBOARD/Dashboardview"; 
import Expenses from "./DASHBOARD/Expenses"
import Notification from "./DASHBOARD/Notification";
import Favorite from "./DASHBOARD/Favorite"
import Settings from "./DASHBOARD/Settings";
import AdminLayout from "./Admin-Dashboard/AdminLayout";
import AdminView from "./Admin-Dashboard/AdminView";
import AdmDashboard from "./Admin-Dashboard/AdmDashboard";
import RentalForm from "./Components/RentalForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="tours" element={<Tourpackage />} />
          <Route path="contact" element={<Contact />} />
           <Route path="login" element={<Login />} /> 
           <Route path="Register" element={<Register />} />
           <Route path="Forgotpassword" element={<ForgotPassword />} />
           <Route path="RentalForm" element={<RentalForm />} />
        </Route>

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboardlayout />}>
          <Route index element={<Dashboardview />} />  
          <Route path="expenses" element={<Expenses />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="Setting" element={<Settings />} />
        </Route>
      
        <Route path="/Admin-Dashboard" element={<AdminLayout />}>
        <Route index element={<AdminView />} />
        <Route path="Adm-dashboard" element={<AdmDashboard />} /> {/* Corrected path */}

       </Route>



          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
