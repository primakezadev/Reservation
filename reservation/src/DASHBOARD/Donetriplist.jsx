import React from 'react';
import marriot from "../assets/images/marriot.jpeg";
import zanz from "../assets/images/zanz.jpeg";
import dar from "../assets/images/dar.jpg";
import onomo from "../assets/images/onomo.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic1 from "../assets/images/pic1.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import '../DASHBOARD/Dashboard_Style/view.css'; 

const tripeData = [
  {
    id: 1,
    image: marriot, 
    location: 'marriot kigali',
    date: '08 - 14 Sep 2023',
  },
  {
    id: 2,
    image: zanz,
    location: 'zanzibar tanzania',
    date: '08 - 14 Sep 2023',
  },
  {
    id: 3,
    image: dar,
    location: 'dar es salam tanzania',
    date: '08 - 14 Sep 2023',
  },
  {
    id: 4,
    image: onomo,
    location: 'kigali rwanda',
    date: '08 - 14 Sep 2023',
  },
  {
    id: 5,
    image: pic2,
    location: 'kampala Uganda',
    date: '08 - 14 Sep 2023',
  },
  {
    id: 6,
    image: pic1,
    location: 'bujumbura Burundi',
    date: '08 - 14 Sep 2023',
  },
  {
    id: 7,
    image: pic3,
    location: 'Kinshasa DRC',
    date: '08 - 14 Sep 2023',
  },
];

const TripeItem = ({ image, location, date }) => {
  return (
    <div className="tripe-item">
      <img src={image} alt={location} className="tripe-image" />
      <div className="tripe-details">
        <h3 className="tripe-location">{location}</h3>
        <p className="tripe-date">{date}</p>
      </div>
    </div>
  );
};

const DoneTripeList = () => {
  return (
    <div className="done-tripe-list">
      <h2 className="list-title">Done Trips</h2>
      {tripeData.map((tripe) => (
        <TripeItem
          key={tripe.id}
          image={tripe.image}
          location={tripe.location}
          date={tripe.date}
        />
      ))}
    </div>
  );
};

export default DoneTripeList;