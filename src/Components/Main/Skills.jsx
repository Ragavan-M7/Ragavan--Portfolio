import React, { useEffect, useState } from "react";
import "/src/assets/css/Skills.css";

const skills = [
  { name: "ReactJS", icon: "fab fa-react", color: "#61DBFB" },
  { name: "Python", icon: "fab fa-python", color: "#3776AB" },
  { name: "Django", icon: "fas fa-leaf", color: "#092E20" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
  { name: "SQL", icon: "fas fa-database", color: "#003B57" },
  { name: "JavaScript", icon: "fab fa-js", color: "#F0DB4F" },
  { name: "HTML", icon: "fab fa-html5", color: "#E44D26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#264de4" },
  { name: "GitHub", icon: "fab fa-github", color: "#171515" },
];

function Skills() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Animate cards one by one
    skills.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 200); // delay between each card
    });
  }, []);

  return (
    <div id="skills" className="skills-section">
      <div className="container">
        <h1 className="text-center mb-5 display-5 fw-bold text-light animate__animated animate__fadeInDown">
          My Skills
        </h1>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div
                className={`skill-card ${
                  visibleCards.includes(index) ? "animate-visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <i
                  className={`${skill.icon} fa-3x mb-3`}
                  style={{ color: skill.color }}
                ></i>
                <h5 className="text-white">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
