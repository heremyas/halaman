import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="mantra">
        PLANTS ARE CUTE,<br></br>AREN'T THEY? ツ
      </h1>
      <div className="btn-container">
        <a href="#gallery">
          <h3 className="scroll">SCROLL DOWN</h3>
        </a>
        <h3 className="whatIs">WHAT IS BOTANIM?</h3>
      </div>
    </div>
  );
};

export default Hero;
