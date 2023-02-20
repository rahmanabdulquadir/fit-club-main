import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-l">
        <Header></Header>
      </div>
      <div className="hero-r">
        <h3>This is hero right side</h3>
      </div>
    </div>
  );
};

export default Hero;
