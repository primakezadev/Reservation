import React from "react";
import "../Styles/Tour.css";
import Tourrwanda from "./Tourrwanda";
import Tourkenya from "./Tourkenya";
import Tourtanzania from "./Tourtanzania";
import Touruganda from "./Touruganda";
import Tourburundi from "./Tourburundi";
import Tourdrc from "./Tourdrc";
import Touraddis from "./Touraddis"


const Tourpackage = () => {
  return (
    <div className="safari-container">
      <h2 className="safari-title">Rwanda Gorilla Trekking & Safari Tours</h2>
      <div className="safari-rating">
        <span className="stars">⭐⭐⭐⭐☆</span>
        <span className="rating"> 4.3/5 </span>
        <a href="#" className="reviews"> - 14 Rwanda Safari Reviews</a>
      </div>
      <p className="safari-description">
        Rwanda is famous for its gorilla trekking opportunities in the Virunga Mountains. 
        This is where Dian Fossey researched and habituated mountain gorillas in the 1960s. 
        Although gorilla trekking is a once-in-a-lifetime experience, the country has a lot more to offer. 
        In fact, if gorilla trekking is beyond your budget, Rwanda is still worth visiting as an up-and-coming 
        destination offering primate walks, volcano hikes, and bird watching in Volcanoes National Park 
        and Nyungwe National Park, plus boat trips on Lake Kivu in the Rift Valley and classic safaris in 
        search of the Big Five in low-key Akagera National Park.
      </p>
      <Tourrwanda />
      <Tourkenya />
      <Tourtanzania />
      <Touruganda />
      <Tourburundi />
      <Tourdrc />
      <Touraddis />
    </div>
  );
};

export default Tourpackage;
