import React from "react";
import "/src/assets/css/Resume.css"; // Custom styles

function Resume() {
  return (
    <div id="resume" className="resume-section py-5">
      <div className="container text-light">
        <h1 className="text-center mb-4 display-5 fw-bold animate__animated animate__fadeInDown">
          My Resume
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {/* Resume Summary */}
            <div className="resume-box mb-4 animate__animated animate__fadeInLeft">
              <h4 className="text-primary fw-bold">Profile</h4>
              <p>
                Full Stack Developer skilled in React, Python, Django, MySQL,
                REST APIs, and responsive design. Focused on clean, optimized
                code and user experience.
              </p>
            </div>

            {/* Experience Section */}
            <div className="resume-box mb-4 animate__animated animate__fadeInRight">
              <h4 className="text-primary fw-bold">Experience</h4>
              <ul>
                <li>
                  <strong>Full Stack Developer</strong> - Vetri IT Systems
                  (2025-Present)
                </li>
                <li>
                  <strong>Intern - Python & Django Developer</strong> - Vetri IT
                  Systems (2024)
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div className="resume-box mb-4 animate__animated animate__fadeInLeft">
              <h4 className="text-primary fw-bold">Education</h4>
              <p>
                B.Sc in Computer Science, Manonmaniam Sundaranar University
                (2021–2024)
              </p>
            </div>

            {/* Skills */}
            <div className="resume-box mb-4 animate__animated animate__fadeInRight">
              <h4 className="text-primary fw-bold">Technical Skills</h4>
              <p>React, Python, Django, MySQL, Bootstrap, HTML, CSS, GitHub</p>
            </div>

            {/* Download Button */}
            <div className="text-center mt-5">
              <a
                href="/Ragavan_resume.pdf"
                download
                className="btn btn-outline-primary px-4 py-2 fs-5 fw-bold download-btn animate__animated animate__zoomIn"
              >
                <i className="fas fa-download me-2"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
