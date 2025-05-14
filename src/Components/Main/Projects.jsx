import React from "react";
import "/src/assets/css/Projects.css"; // create this for custom styling
import project1 from "/src/assets/images/project1.png"; // use your real images
import project2 from "/src/assets/images/project2.png";
import project3 from "/src/assets/images/project3.png";
import project4 from "/src/assets/images/project4.png";

const projects = [
  {
    title: "Plant Shop – E-commerce Website",
    description:
      "An elegant and responsive plant e-commerce platform featuring product listings, shopping cart, user authentication, and checkout. Built with React, Bootstrap .",
    image: project1,
    tech: ["React", "Bootstrap", "CSS", "HTML"],
    link: "https://plant-shop-rust.vercel.app/",
  },
  {
    title: "Photography Portfolio",
    description:
      "A modern and interactive portfolio website for photographers. Includes animated galleries, project showcases, and responsive design to highlight creative work.",
    image: project2,
    tech: ["React", "Bootstrap", "CSS", "HTML"],
    link: "https://photography-alpha-rose.vercel.app",
  },
  {
    title: "Car Booking Service",
    description:
      "A responsive car rental and booking platform with sleek UI. Allows users to explore available vehicles, view details, and book rides easily across devices.",
    image: project3,
    tech: ["React", "Bootstrap", "CSS", "HTML"],
    link: "https://zara-alpha.vercel.app/",
  },
  {
    title: "Beauty Salon Website",
    description:
      "A stylish and professional website for a beauty salon. Showcases services, booking options, pricing, and contact info, with a polished and responsive layout.",
    image: project4,
    tech: ["React", "Bootstrap", "CSS", "HTML"],
    link: "https://saloon-flax.vercel.app",
  },
];

function Projects() {
  return (
    <div id="projects" className="projects-section py-5 bg-dark text-light">
      <div className="container">
        <h1 className="text-center mb-5 display-5 fw-bold animate__animated animate__fadeInDown">
          My Projects
        </h1>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 mb-4 animate__animated animate__zoomIn"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: "1s",
              }}
            >
              <div className="card project-card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body text-light">
                  <h5 className="card-title text-white">{project.title}</h5>
                  <p className="card-text text-white">{project.description}</p>
                  <div className="mb-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
