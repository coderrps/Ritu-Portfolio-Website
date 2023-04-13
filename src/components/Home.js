import React from "react";
import "../components/Home.css";
import "../components/Navbar.js";
import {
  FaFacebook,
  FaFemale,
  FaGithub,
  FaCode,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaLaptopCode,
  FaGraduationCap,
  FaLaptop,
  FaHeadset,
} from "react-icons/fa";
// installed typewriter effect (npm install --save typewriter-effect)
import Typewriter from "typewriter-effect";
export const Home = () => {
  return (
    <div className="body">
      {/* Home Section Starts */}
      <div class="container" className="home" id="home">
        <div class="row">
          <div class="col-sm" id="section1">
            <h1>
              Hi There, <span className="ritu">I'm Ritu Priya Singh</span>
            </h1>
            <div>
              <h2>
                I am into
                <div className="typing">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Data Science.",
                        "Full Stack Development.",
                        "Data Analysis.",
                      ],
                    }}
                  />
                </div>
              </h2>
            </div>
            <div className="about-btn-class">
              <a href="#about" class="about-btn">
                <span>About Me </span>
              </a>
            </div>
            <div>
              <div className="social-icons-home">
                <a href="" className="home-icons">
                  <FaGithub />
                </a>
                <a href="" className="home-icons">
                  <FaInstagram />
                </a>
                <a href="" className="home-icons">
                  <FaLinkedin />
                </a>
                <a href="" className="home-icons">
                  <FaFacebook />
                </a>
                <a href="" className="home-icons">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <img src={require("../images/logo1.png")} className="my-img" />
          </div>
        </div>
      </div>
      {/* Home Section Ends */}

      {/* About Section Starts */}
      <div id="about" className="about">
        <h1 className="h1">
          <FaFemale /> About Me
        </h1>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                src={require("../images/profile1.png")}
                className="abt-img"
              />
            </div>
            <div class="col-sm" id="abt-content">
              <h1>
                I am <span>Ritu Priya Singh</span>
              </h1>
              <h4>An Engineering Student</h4>
              <p>
                I am a highly skilled data scientist with extensive experience
                in the field. I hold a degree in a relevant field and have
                completed several courses in data analysis, machine learning,
                and statistics. I have worked on a variety of data-driven
                projects, ranging from healthcare to finance, and have
                demonstrated an exceptional ability to analyze complex datasets
                and derive actionable insights. I have also contributed to the
                field through publications and presentations at industry
                conferences. I possess strong technical skills in programming
                languages such as Python, R, and SQL, as well as experience with
                popular data analysis tools and frameworks. Overall, my
                expertise in data science makes me an excellent candidate for
                relevant job or academic opportunities in the field.
              </p>
              <h5>
                <span>Email:</span> ritupriyasingh08@gmail.com <br />
                <span>Place:</span> Delhi, India - 110059
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* About Section Ends */}

      {/* Skills Section Starts */}
      <div className="skills" id="skills">
        <h1>
          <FaLaptopCode /> Skills & Abilities
        </h1>
        <div class="row">
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/tableau.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/cpp.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/devops.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/excel.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/github.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/html-css.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/my-sql.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/python.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/r-prog.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/react-js.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/wordpress.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
          <div class="col-sm-3" id="css">
            <div class="card">
              <img
                src={require("../images/skills-icons/bootstrap.png")}
                alt="card-img"
                className="card"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Skills Section Ends */}

      {/* Education Section Starts */}
      <div className="education" id="education">
        <h1>
          <FaGraduationCap /> My Education
        </h1>

        <div className="carding">
          <div class="card" className="edu-card">
            <img src={require("../images/lpu.jpeg")} className="edu-img" />
            <div class="card-body">
              <h3>
                Bachelors of Computer Science <br /> and Engineering
              </h3>
              <h5>Lovely Professional University | Punjab</h5>
              <h3>2020 - 2024 | Pursuing</h3>
            </div>
          </div>
        </div>

        <div className="carding">
          <div class="card" className="edu-card">
            <img src={require("../images/evergreen.jpg")} className="edu-img" />
            <div class="card-body">
              <h3>Intermediate | Science & Maths</h3>
              <h5>Sr. Sec. Evergreen Public School | New Delhi</h5>
              <h3>2018 - 2020 | Completed</h3>
            </div>
          </div>
        </div>

        <div className="carding">
          <div class="card" className="edu-card">
            <img src={require("../images/baldwin.jpg")} className="edu-img" />
            <div class="card-body">
              <h3>Matriculation | CBSE </h3>
              <h5>Baldwin Academy | Patna, Bihar</h5>
              <h3>2018 | Completed</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Education Section Ends */}

      {/* Projects Section Starts */}
      <div className="projects" id="projects">
        <h1>
          <FaCode /> Projects
        </h1>
        <div class="row">
          <div class="col-sm-4" id="css">
            <div class="card-pro">
              <a
                href="https://github.com/coderrps/Pokemon-Dashboard"
                target="_blank"
              >
                <img
                  src={require("../images/pokemon.png")}
                  alt="card-img"
                  className="pro"
                />
                <p className="hide">Pokemon Dashboard</p>
              </a>
            </div>
          </div>
          <div class="col-sm-4" id="css">
            <div class="card-pro">
              <a
                href="https://github.com/coderrps/bihar-tourism"
                target="_blank"
              >
                <img
                  src={require("../images/bihar.png")}
                  alt="card-img"
                  className="pro"
                />
                <p className="hide">Bihar Tourism</p>
              </a>
            </div>
          </div>
          <div class="col-sm-4" id="css">
            <div class="card-pro">
              <a href="https://github.com/coderrps/login-page" target="_blank">
                <img
                  src={require("../images/login.png")}
                  alt="card-img"
                  className="pro"
                />
                <p className="hide">Login Page</p>
              </a>
            </div>
          </div>
          <div class="col-sm-4" id="css">
            <div class="card-pro">
              <a
                href="https://github.com/coderrps/excel-dashborard"
                target="_blank"
              >
                <img
                  src={require("../images/dashboard.png")}
                  alt="card-img"
                  className="pro"
                />
                <p className="hide">Internet Service Dashboard</p>
              </a>
            </div>
          </div>
          <div class="col-sm-4" id="css">
            <div class="card-pro">
              <a
                href="https://github.com/coderrps/counter-app-3rd-assignment"
                target="_blank"
              >
                <img
                  src={require("../images/counter.png")}
                  alt="card-img"
                  className="pro"
                />
                <p className="hide">Counter Application</p>
              </a>
            </div>
          </div>
          <div class="col-sm-4" id="css">
            <div class="card-pro">
              <a href="https://github.com/coderrps/Movies-Apps" target="_blank">
                <img
                  src={require("../images/movies.png")}
                  alt="card-img"
                  className="pro"
                />
                <p className="hide">Movies Application</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section Ends */}

      {/* Training Section Starts */}
      <div className="trainings" id="trainings">
        <h1>
          <FaLaptop /> Trainings
        </h1>
        <div class="bg-gradient_solid">
          <div class="container">
            <div class="steps">
              <div class="steps-container">
                <div class="content">
                  <h3>DevOps Summer Training</h3>
                  <h4>Lovely Professional University | May`22 - July`22</h4>
                  <h5>Outcomes</h5>
                  <p>• Learned the basics of AWS</p>
                  <p>• Deployment of the websites using AWS tools</p>
                  <p>
                    • Learned the fastest delivery of software with
                    much-improved qualities
                  </p>
                </div>
                <i class="step-line"></i>
                <div class="date">2022</div>
              </div>
              <div class="steps-container">
                <div class="content">
                  <h3>React JS</h3>
                  <h4>Coding Spoon | Jan`23 - Feb`23</h4>
                  <h5>Outcomes</h5>
                  <p>
                    • Concepts of React JS in Web Development Constructed
                    complex
                  </p>
                  <p>
                    • Web applications using React Js Implemented and integrated
                    APIs and Hooks
                  </p>
                </div>
                <i class="step-line"></i>
                <div class="date">2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Training Section Ends */}

      {/* Contact Section Starts */}
      <div className="contact" id="contact">
        <h1>
          <FaHeadset /> Get In Touch
        </h1>
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +91-9910901975</div>
              </div>
              <form action="https://formspree.io/f/mdovppjv" method="POST" class="screen-body-item">
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        name="name"
                        type="text"
                        placeholder="NAME"
                        required
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        name="email"
                        type="text"
                        placeholder="EMAIL"
                        required
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        name="contact"
                        placeholder="CONTACT NO"
                        required
                      />
                    </div>
                    <div class="app-form-group message">
                      <input
                        class="app-form-control"
                        name="message"
                        placeholder="MESSAGE"
                        required
                      />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">CANCEL</button>
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section Starts */}
    </div>
  );
};
