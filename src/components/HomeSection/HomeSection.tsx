import React from "react";
import "./HomeSection.css";
import profilePic from "../../assets/uma_pic.png";

const HomeSection = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1>
          Hi, I'm <span className="highlight">Uma</span>
        </h1>
        <h2 className="gradient-role"> Full Stack Developer</h2>
        <p>
          I build fast, accessible, and beautiful web interfaces using React,
          TypesScript and CSS
        </p>
        <a href="#contact" className="cta-button">
          Contact
        </a>
      </div>
      <div className="home-right">
        <img src={profilePic} className="cutout-img" alt="Uma" />
      </div>
    </section>
  );
};

export default HomeSection;
