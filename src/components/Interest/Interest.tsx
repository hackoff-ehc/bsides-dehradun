import React from "react";
import "./Interest.css";

function Interest() { 
  
    return (
      <div className="boxes">  
      <div className="box1">
        <h2>Show your interest</h2>
        
      <div className="boxx">
        <h4>Call For Paper</h4>
        <p>We happily open doors to researchers and hackers around the world to work on the 'next big thing' in security. We request everyone to submit their new research.  </p>
        <hr className="line"/>
        <button className="btn">Click here</button>
      </div>
      <div className="boxx">
         <h4>Buy Tickets</h4>
         <p>Tickets for BSides Dehradun 2024 will go on sale in early Novmber 2023. We encourage you to purchase your tickets early, as they are expected to sell out quickly.</p>
         <hr className="line"/>
         <button className="btn">Click here</button>
      </div>
      <div className="boxx">
      <h4>Become a Sponsor</h4>
      <p>Join the winning team and become a sponsor! We are proud to partner with amazing sponsors who support our mission and vision. Together, we make a difference.</p>
      <hr className="line"/>
      <button className="btn">Click here</button>
      </div>
      </div>
      
      <div className="box2">
       <h2>BSides Conferences Feature</h2>
       <div className="boxtwo">
        <h3>Keynotes and talks</h3>
       </div>
       <div className="boxtwo">
       <h3>Workshops</h3>
       </div>
       <div className="boxtwo">
       <h3>Panel discussions</h3>
       </div>
       <div className="boxtwo">
       <h3>CTF competitions</h3>
       </div>
       <div className="boxtwo">
       <h3>Village events</h3>
       </div>
       <div className="boxtwo">
       <h3>Networking events</h3>
       </div>
      </div  >
      
      </div>
    );  
  }
  export default Interest;