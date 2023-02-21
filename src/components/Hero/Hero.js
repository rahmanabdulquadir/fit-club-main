import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-l">
        <Header></Header>

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Header */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div><span></span><span></span></div>
          <div><span></span><span></span></div>
          <div><span></span><span></span></div>
        </div>
      </div>
      <div className="hero-r">
        <h3>This is hero right side</h3>
      </div>
    </div>
  );
};

export default Hero;
