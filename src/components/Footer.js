import React from "react";
import "./Navbar.js";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
// npm install react-icons --save
import "../components/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer
        class="text-center text-lg-start bg-white text-muted"
        className="section-footer"
      >
        <section
          class="d-flex justify-content-center justify-content-lg-between p-4"
          id="section-1"
        >
          <div class="me-5 d-none d-lg-block" className="social-text">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="social-icons">
            <a
              target="_blank"
              href="https://github.com/coderrps"
              className="icons"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/_ritupriyasingh/"
              className="icons"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/ritupriyasingh/"
              className="icons"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100040492637149&mibextid=ZbWKwL"
              target="_blank"
              className="icons"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href=" https://wa.me/+911234567890"
              className="icons"
            >
              <FaWhatsapp />
            </a>
            <a
              className="icons"
              target="_blank"
              href="mailto:rs9110131217@gmail.com?subject = Feedback&body = Message"
            >
              <FaEnvelope />
            </a>
          </div>
        </section>

        <section class="section-2">
          <div class="container text-center text-md-start">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-2 mx-auto mb-4">
                <img
                  src={require("../images/logo.png")}
                  className="logo-footer"
                />
              </div>
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h3 class="text-uppercase fw-bold mb-4">
                  {/* <img src={require('../images/logo.png')} className="logo"/> */}
                  <i class="fas fa-gem me-3 text-secondary"></i>Ritu's Portfolio
                </h3>
                <p className="para">
                  Thank you for visiting my personal portfolio website. Connect
                  with me over social media.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h4 class="text-uppercase fw-bold mb-4">Quick Links</h4>
                <p className="links">
                  <a href="#home">Home</a>
                </p>
                <p className="links">
                  <a href="#about">About</a>
                </p>
                <p className="links">
                  <a href="#skills">Skills</a>
                </p>
                <p className="links">
                  <a href="#education">Education</a>
                </p>
                <p className="links">
                  <a href="#projects">Projects</a>
                </p>
                <p className="links">
                  <a href="#trainings">Trainings</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h4 class="text-uppercase fw-bold mb-4">Contact</h4>
                <p className="links">
                  <FaHome /> New Delhi, India 110059, IN
                </p>
                <p className="links">
                  <FaEnvelope /> ritupriyasingh08@gmail.com
                </p>
                <p className="links">
                  <FaPhone /> +91-1234567890
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4" className="credits">
          © 2023 Copyright: Ritu Priya Singh
        </div>
      </footer>
    </>
  );
};
