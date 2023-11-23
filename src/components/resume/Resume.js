import React from "react";
import "./Resume.scss";

import educationIcon from "../../assets/images/icons/education.png";
import certificatesIcon from "../../assets/images/icons/certificates.png";
import workIcon from "../../assets/images/icons/work.png";
import yogaIcon from "../../assets/images/icons/yoga.png";
import cookingIcon from "../../assets/images/icons/cooking.png";
import plantingIcon from "../../assets/images/icons/planting.png";
import dotSeparator from "../../assets/images/icons/dot.png";

const Resume = () => {
  return (
    <section className="resume">
      <h2 className="title">Resume</h2>
      <div className="grid-2">
        <div className="sec-experience">
          <article className="resume-item">
            <div className="resume-subtitle">
              <img src={educationIcon} alt="education icon" />
              <h3>Education</h3>
            </div>
            <div className="content">
              <div className="left-side">
                <div className="edu-info">
                  <p>Feb 2022 - Sep 2022</p>
                  <span>⋮IW Education Center Bitola</span>
                </div>
                <div className="edu-info">
                  <p>Oct 2000 - Sep 2004</p>
                  <span>Ss. Cyril and Methodius Skopje</span>
                </div>
                <div className="edu-info">
                  <p>Sep 1996 - Jun 2000</p>
                  <span>High School Orce Nikolov - Skopje</span>
                </div>
              </div>
              <div className="middle">
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
              </div>
              <div className="right-side">
                <p>Frontend Developer with React</p>
                <p>Interior and Furniture Design</p>
                <p>Elecrical and Electronics Engineering</p>
              </div>
            </div>
          </article>
          <article className="resume-item">
            <div className="resume-subtitle">
              <img src={certificatesIcon} alt="certification icon" />
              <h3>Certifications</h3>
            </div>
            <div className="content">
              <div className="left-side">
                <div className="edu-info">
                  <p>Jan 2023</p>
                  <span>Codecademy</span>
                </div>
                <div className="edu-info">
                  <p>Oct 2022</p>
                  <span>Codecademy</span>
                </div>
                <div className="edu-info">
                  <p>Sep 2022</p>
                  <span>freeCodeCamp</span>
                </div>
              </div>
              <div className="middle">
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
              </div>
              <div className="right-side">
                <p>
                  <a
                    href="https://www.codecademy.com/profiles/designPro12910/certificates/5f85dd867b67b60014ac9ea3"
                    target="_blank"
                  >
                    Front-End Engineer Career Path
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.codecademy.com/profiles/designPro12910/certificates/af00e5032d0a68cc84879983f5d8333b"
                    target="_blank"
                  >
                    Learn React Course
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.freecodecamp.org/certification/fcc9ee9d237-83ee-4388-9968-a4953127c589/front-end-development-libraries"
                    target="_blank"
                  >
                    Front End Development Libraries
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article className="resume-item">
            <div className="resume-subtitle">
              <img src={workIcon} alt="work icon" />
              <h3>Experience</h3>
            </div>
            <div className="content">
              <div className="left-side">
                <div className="edu-info">
                  <p>Feb 2023 - Present</p>
                  <span>Division Marketing</span>
                </div>
                <div className="edu-info">
                  <p>Jan 2009 - Feb 2023</p>
                  <span>Self-employed</span>
                </div>
              </div>
              <div className="middle">
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
                <span className="dot-separator">
                  <img src={dotSeparator} alt="separator" />
                </span>
              </div>
              <div className="right-side">
                <p>Web Developer</p>
                <p>Web Developer</p>
              </div>
            </div>
          </article>
        </div>
        <div className="sec-skills">
          <article className="skill-item">
            <h3>Design Skills</h3>
            <div className="skill-slider">
              <div className="slider">
                <p>Responsive Web Design</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="85"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>Adobe Photoshop</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="65"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>Adobe XD/Figma</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="70"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>Logo Design</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="60"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>UX/UI Design</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="75"
                  readOnly
                />
              </div>
            </div>
          </article>
          <article className="skill-item">
            <h3>Coding Skills</h3>
            <div className="skill-slider">
              <div className="slider">
                <p>Wordpress</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="90"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>HTML/CSS</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="90"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>JavaScript</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="65"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>React</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="60"
                  readOnly
                />
              </div>
              <div className="slider">
                <p>Git</p>
                <input
                  className="slide"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="60"
                  readOnly
                />
              </div>
            </div>
          </article>
        </div>
        <div className="sec-knowledge">
          <article className="knowledge-item">
            <h3>Knowledge</h3>
            <div className="knowledge-tag">
              <span>Wordpress</span>
              <span>Research</span>
              <span>SEO</span>
              <span>Content Mangement</span>
              <span>Google Ads</span>
              <span>Social Media</span>
              <span>Google Analytics</span>
              <span>Flexibility</span>
              <span>Communication</span>
              <span>Teamwork</span>
            </div>
          </article>

          <article className="knowledge-item">
            <h3>Hobbies</h3>
            <div className="hobbies-grid">
              <img src={yogaIcon} alt="yoga icon" />
              <img src={plantingIcon} alt="yoga icon" />
              <img src={cookingIcon} alt="yoga icon" />
            </div>
          </article>
          <article className="knowledge-item">
            <h3>Languages</h3>
            <ul>
              <li>Macedonian - Native</li>
              <li>English - Advanced</li>
              <li>Serbian - Intermediate</li>
              <li>Italian - Basic</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resume;
