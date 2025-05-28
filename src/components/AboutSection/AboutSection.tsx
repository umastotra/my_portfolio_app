import React from "react";
import "./AboutSection.css";

import pythonLogo from "../../assets/tech/python.png";
import reactLogo from "../../assets/tech/react.png";
import tsLogo from "../../assets/tech/typescript.png";
import djangoLogo from "../../assets/tech/django.png";
import postgresLogo from "../../assets/tech/postgresql.png";
import htmlLogo from "../../assets/tech/html5.png";
import cssLogo from "../../assets/tech/css.png";
import javascriptLogo from "../../assets/tech/javascript.png";
import fastapiLogo from "../../assets/tech/fastapi.png";

const front_end_skills = [
  { name: "HTML5", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JavaScript", icon: javascriptLogo },
  { name: "React", icon: reactLogo },
  { name: "TypeScript", icon: tsLogo },
  // add more icons as needed
];

const back_end_skills = [
  { name: "Python", icon: pythonLogo },
  { name: "Django", icon: djangoLogo },
  { name: "PostgreSQL", icon: postgresLogo },
  { name: "FastAPI", icon: fastapiLogo },
  // add more icons as needed
];

const AboutSection = () => {
  return (
    <section id="about" className="about">
      {/* Section Title */}
      <h2> About Me</h2>
      {/* Bio paragraph */}
      <p>
        I'm a full stack developer passionate about building modern, scalable
        web apps.
      </p>
      <div className="skills-columns">
        <div className="skills-card">
          <h3>Frontend</h3>
          <p>
            On the frontend, I work with React and TypeScript to create clean,
            responsive interfaces.
          </p>
          {/* Skills List*/}
          <div className="skills-icons">
            {front_end_skills.map(({ name, icon }) => (
              <div className="skill-icon" key={name}>
                <img src={icon} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-card">
          <h3>Backend</h3>
          <p>
            On the backend, I specialize in Django and FastAPI, focusing on
            efficient API design and performance.
          </p>
          {/* Skills List*/}
          <div className="skills-icons">
            {back_end_skills.map(({ name, icon }) => (
              <div className="skill-icon" key={name}>
                <img src={icon} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
