import React from "react";
import "../components/Navbar.css";
import "../components/Home.js";
// npm install --save-dev url-loader file-loader (for importing the image from local file)
export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" color="white" id="mynav">
        <a class="navbar-brand" href="#"></a>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={require("../images/logo.png")}
              alt="Ritu Priya Singh"
              className="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="lmao">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#trainings"
                >
                  Trainings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="follow-btn">
            <a
              href="https://drive.google.com/file/d/1fg22wCCH9haFGBwZuFyeI05cg8RzyWXU/view?usp=share_link"
              target="_blank"
            >
              <button type="button" class="btn">
                Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
