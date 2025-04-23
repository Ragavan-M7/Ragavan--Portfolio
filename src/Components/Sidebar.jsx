import React from "react";
import "../assets/css/Sidebar.css";
import img1 from "../assets/images/sidebar-img.jpg";

function Sidebar({ onLinkClick }) {
  return (
    <div className="sidebar d-flex flex-column align-items-center py-4">
      {/* Profile */}
      <img
        src={img1}
        className="img-fluid rounded-circle border border-2 border-primary mb-3"
        style={{ height: "150px" }}
        alt="Profile"
      />
      <h5 className="mb-1 fs-2" style={{ color: "#ff006e" }}>
        RAGAVAN M
      </h5>
      <p className="text-white mt-2">Full Stack Developer</p>

      {/* Social Links */}
      <div className="d-flex gap-3 mb-3 mt-3">
        <a
          href="https://www.linkedin.com/in/ragavan15/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-lg text-white"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram fa-lg text-white"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100041539543868"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook fa-lg text-white"></i>
        </a>
      </div>

      {/* Divider */}
      <div className="border-top border-danger mt-4 w-75"></div>

      {/* Nav Links */}
      <nav className="nav flex-column text-center w-100 mt-3">
        <a
          className="nav-link animate-link"
          href="#about"
          onClick={onLinkClick}

        >
          <i className="fas fa-user me-2"></i> About Me
        </a>

        <a
          className="nav-link animate-link"
          href="#skills"
          onClick={onLinkClick}
        >
          <i className="fas fa-laptop-code me-2"></i> Skills
        </a>
        <a
          className="nav-link animate-link"
          href="#resume"
          onClick={onLinkClick}
        >
          <i className="fas fa-file-alt me-2"></i> Resume
        </a>
        <a
          className="nav-link animate-link"
          href="#contact"
          onClick={onLinkClick}
        >
          <i className="fas fa-envelope me-2"></i> Contact
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
