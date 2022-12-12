import React from "react";
import "./Resume.scss";

import educationIcon from "../../assets/images/icons/education.png";
import certificatesIcon from "../../assets/images/icons/certificates.png";
import workIcon from "../../assets/images/icons/work.png";
import yogaIcon from "../../assets/images/icons/yoga.png";
import cookingIcon from "../../assets/images/icons/cooking.png";
import plantingIcon from "../../assets/images/icons/planting.png";

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
          </article>
          <article className="resume-item">
            <div className="resume-subtitle">
              <img src={workIcon} alt="work icon" />
              <h3>Experience</h3>
            </div>
          </article>
        </div>
        <div className="sec-skills">
          <article className="skill-item">
            <h3>Design Skills</h3>
          </article>
          <article className="skill-item">
            <h3>Coding Skills</h3>
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
            <h3>Languages</h3>
            <ul>
              <li>Macedonian - Native</li>
              <li>English - Advanced</li>
              <li>Serbian - Intermediate</li>
              <li>Italian - Basic</li>
            </ul>
          </article>
          <article className="knowledge-item">
            <h3>Hobbies</h3>
            <div className="hobbies-grid">
              <img src={yogaIcon} alt="yoga icon" />
              <img src={plantingIcon} alt="yoga icon" />
              <img src={cookingIcon} alt="yoga icon" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resume;
