import React from "react";
import "./index.css";
import heroicon from "../Assets/hero-icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="white-bg"></h1>
        <h1>EXPLORE </h1>
        <h1 className="yellow-bg"></h1>
        <h1>CLOTHS</h1>
        <h3>Live for influential and innovative fashion! </h3>

        <button>SHOP NOW</button>
      </div>
      <div className="hero-right">
        <img src={heroicon} />
      </div>
    </div>
  );
};

export default Hero;
