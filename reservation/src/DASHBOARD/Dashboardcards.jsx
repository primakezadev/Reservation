import React from "react";
import "../DASHBOARD/Dashboard_Style/view.css";
import { CiUser } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { CiMail } from "react-icons/ci";



export default function Dashboardview(){
    const stats = [
        { 
            value: '340,230',
             label: 'Page Views',
             progress: 40, 
             color: "bg-blue-500",
             icon: <CiUser className="user" /> 
            },

           {
             value: '$653,000',
              label: 'Monthly Revenue Goal',
              progress: 50, 
              color: "bg-yellow-500",
              icon: <IoMdEye className="eye"/>
            },

          { 
            value: '47,500',
             label: 'New Emails Received',
             progress: 80,
             color: "bg-red-500",
             icon: <CiMail className="email" />

            },
      ];
    
    return(
        <div className="dashboardview-container">

            <div className="stats-container" >
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        
          <div className="stat-icon">{stat.icon}</div>
       
        </div>
        
      ))}
    </div>
          
           
           
                
           
      
        </div>
    )
}