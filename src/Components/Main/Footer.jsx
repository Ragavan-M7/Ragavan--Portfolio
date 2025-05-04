import React from "react";
import "/src/assets/css/Footer.css"; // custom styles

function Footer() {
  return (
    <footer id="contact" className="footer-section py-5 text-light">
      <div className="container text-center">
        {/* Title */}
        <h2 className="mb-4 animate__animated animate__fadeInUp">
          Let's Connect
        </h2>

        {/* Contact Info */}
        <p className="mb-2">
          Email:{" "}
          <a href="mailto:ragava15052004@gmail.com" className="text-info">
            ragava15052004@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+919876543210" className="text-info">
            +91 866756 3366
          </a>
        </p>

        {/* Social Icons */}
        <div className="social-icons mt-4 d-flex justify-content-center gap-4 animate__animated animate__fadeInUp">
          <a href="https://www.linkedin.com/in/ragavan15/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100041539543868" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a> */}
        </div>

        {/* Copyright */}
        <p className="mt-4 small">
          &copy; {new Date().getFullYear()} Ragavan M. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
