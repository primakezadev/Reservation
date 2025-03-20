import React from "react";
import "../DASHBOARD/Dashboard_style/view.css";

import { CiUser } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { GiMidnightClaw } from "react-icons/gi";
import { TiPin } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import Dashboardchart from './Dashboardchart';
import Dashboardcharts from './Dashboardcharts';
import '../DASHBOARD/Dashboard_Style/Expenses.css';

export default function Dashboardview() {
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
            icon: <IoMdEye className="eye" />
        },
        {
            value: '47,500',
            label: 'New Emails Received',
            progress: 80,
            color: "bg-red-500",
            icon: <CiMail className="email" />
        },
    ];

    const cards = [
        {
            title: 'Compared nights',
            value: 125,
            icon: <GiMidnightClaw />,
            percentage: '+56%',
        },
        {
            title: 'Active nights',
            value: 80,
            icon: <TiPin />,
            percentage: '+45%',
        },
        {
            title: 'Canceled nights',
            value: 25,
            icon: <IoCloseSharp />,
            percentage: '+50',
        },
        {
            title: 'Total revenue',
            value: '$15,000',
            icon: <FaDollarSign />,
            percentage: '+55%',
        },
        {
            title: 'Total revenue',
            value: '$15,000',
            icon: <FaDollarSign />,
            percentage: '+55%',
        },
        {
            title: 'Total revenue',
            value: '$15,000',
            icon: <FaDollarSign />,
            percentage: '+55%',
        },
    ];

    return (
        <div className="dashboardview-container">
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-icon">{stat.icon}</div>
                    </div>
                ))}
            </div>

            <div className="card-grid">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <div className="card-title">{card.title}</div>
                            <div className="card-value">
                                {card.value}
                                <span className="card-icon">{card.icon}</span>
                            </div>
                            <div className="card-percentage">{card.percentage}</div>
                        </div>
                    </div>
                ))}
                <Dashboardchart />
                <Dashboardcharts />
                
            </div>
        </div>
    );
}