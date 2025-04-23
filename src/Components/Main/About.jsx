import React from "react";
import img from "/src/assets/images/mainimg.jpg";
import "/src/assets/css/about.css"; // enhanced custom styles
import "animate.css";

function About() {
  return (
    <div id="about" className=" bg-light py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 animate__animated animate__fadeInLeft">
            <h1 className="fw-bold text-dark">
              Hi, I'm a <span className="text-primary">Full Stack</span>
            </h1>
            <h3>
              <span className="typing">Developer</span>
            </h3>
            <ul className="mt-4 about-list">
              <li style={{ animationDelay: "0.2s" }}>
                <i className="fas fa-laptop-code me-2 text-primary"></i>
                Passionate Full Stack Developer with expertise in building
                responsive web applications using modern front-end and back-end
                technologies.
              </li>
              <li style={{ animationDelay: "0.5s" }}>
                <i className="fas fa-code me-2 text-success"></i>
                Skilled in React, Python, Django, MySQL, Bootstrap, and RESTful
                APIs.
              </li>
              <li style={{ animationDelay: "0.8s" }}>
                <i className="fas fa-rocket me-2 text-danger"></i>
                Focused on clean code, performance optimization, and
                user-friendly interfaces.
              </li>
            </ul>

            <a
              href="#resume"
              className="btn btn-resume animate__animated animate__pulse animate__infinite"
            >
              <h2 className="resume-heading animate__animated animate__fadeInDown">
                My Resume
              </h2>
            </a>
          </div>

          {/* Image Section with animated wrapper */}
          <div className="col-12 col-md-6 text-center">
            <div className="image-pro-wrapper">
              <img src={img} alt="profile" className="pro-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
