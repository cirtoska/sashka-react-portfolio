import React from "react";
import "./ProfileCard.scss";

// Social Icons
import linkedin from "../../assets/images/icons/linkedin-color.png";
import github from "../../assets/images/icons/github-dark.png";
import facebook from "../../assets/images/icons/facebook-color.png";
import uxcel from "../../assets/images/icons/uxcel.webp";
import profileImg from "../../assets/images/profile-img.png";

// Contact Icons
import mobile from "../../assets/images/icons/mobile.png";
import mail from "../../assets/images/icons/mail-color.png";
import webPage from "../../assets/images/icons/web-color.png";
import location from "../../assets/images/icons/location-color.png";
import download from "../../assets/images/icons/download.png";

const ProfileCard = () => {
  return (
    <section id="profile-card">
      <article className="profile-card">
        <div className="profile-img">
          <img src={profileImg} alt="Aleksandra Chirtoska" />
        </div>
        <h1 className="dispaly-name">Aleksandra Chirtoska</h1>
        <h2 className="career-title">web developer</h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/aleksandra-chirtoska/">
            <img src={linkedin} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/cirtoska">
            <img src={github} alt="Github icon" />
          </a>
          <a href="https://www.facebook.com/saska.saska">
            <img src={facebook} alt="Facebook icon" />
          </a>
          <a href="https://app.uxcel.com/ux/cirtoska">
            <img src={uxcel} alt="Uxcel icon" />
          </a>
        </div>
        <div className="contact-info">
          <p className="contact-item">
            <img src={mobile} alt="mobile icon" />
            <a href="tel:+38978294523">+38978294523</a>
          </p>
          <p className="contact-item">
            <img src={mail} alt="mail icon" />
            <a href="mailto:cirtoska@gmail.com">cirtoska@gmail.com</a>
          </p>
          <p className="contact-item">
            <img src={webPage} alt="web icon" />
            <a href="https://aleksandrachirtoska.com">
              aleksandrachirtoska.com
            </a>
          </p>
          <p className="contact-item">
            <img src={location} alt="location icon" />
            <span>Prilep, Macedonia</span>
          </p>
        </div>
        <div className="download-resume">
          <a
            href="https://aleksandrachirtoska.com/files/Resume-Aleksandra-Chirtoska-jan23.pdf"
            target="_blank"
            className="download-btn"
          >
            <img src={download} alt="download resume" /> Download CV
          </a>
        </div>
      </article>
    </section>
  );
};

export default ProfileCard;
