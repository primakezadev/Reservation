import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../DASHBOARD/Dashboard_Style/Chart.css"
const data = [
  { name: '1', uv: 20, pv: 65 },
  { name: '2', uv: 40, pv: 60 },
  { name: '3', uv: 30, pv: 80 },
  { name: '4', uv: 10, pv: 75 },
  { name: '5', uv: 90, pv: 70 },
  { name: '6', uv: 30, pv: 60 },
  { name: '7', uv: 100, pv: 55 },
];


const CustomAreaChart = () => {
  return (
    <div className="chart-container"style={{ width: '100%',height: 250 }}>
      <ResponsiveContainer className="relative-chart">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#00bfa5" 
            fill="#b2dfdb" 
            activeDot={{ r: 9 }}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#b0bec5" 
            fillOpacity={0} 
            strokeWidth={2}
            dot={{ fill: '#b0bec5' }}
          />
          
        </AreaChart>
    
      </ResponsiveContainer>
      
    </div>
  );
};

export default CustomAreaChart;
