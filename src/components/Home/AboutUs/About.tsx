import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="text-wrapper">
          <h2>
            A <span>Conference</span> for and by Cybersecurity community.
          </h2>
          <p>
            Security BSides is a community-driven cybersecurity conference where
            people from all over the world come together to collaborate, learn,
            and share their knowledge. We are responsible for organizing an
            independent BSides-approved event for Dehradun.{" "}
          </p>
          <button className="btn-about">About Us</button>
        </div>
        <div className="img-wrapper">
          <div className="box location">
            <h1>Location</h1>
            <div className="underline"></div>
            <h2>Dehradun</h2>
            <h3>India</h3>
          </div>
          <div className="box venue">
            <h1>Venue</h1>
            <div className="underline"></div>
            <h2>To be</h2>
            <h3>announce</h3>
          </div>
          <div className="box date">
            <h1>Date</h1>
            <div className="underline"></div>
            <h2>09-10</h2>
            <h3>February 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
