import React from "react";
import "../DASHBOARD/Dashboard_style/view.css";
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
          
            {/* <div className="chart-info">
                <div className="messages-info">
                <h2 className="inbox">Inbox</h2>
                <div>
                    <h3 className="james">james</h3>
                    <p className="finish">I've finished</p>
                </div>
                <div>
                    <h3 className="christopher">christopher</h3>
                    <p className="awesome">this product is awesome</p>
                </div>

                <div>
                    <h3 className="jessica">Jessica</h3>
                    <p className="cool">this product is cool and helpful</p>
                </div>

                <div>
                   <h3 className="joseph">Joseph</h3>
                   <p className="body">awesome Body lotion</p>
                </div>
                
                </div>
              

            </div> */}
           
           
                
           
      
        </div>
    )
}