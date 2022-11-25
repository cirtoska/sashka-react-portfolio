import React from "react";
import Navbar from "../../layout/navbar/Navbar";
import ProfileCard from "../../components/profile-card/ProfileCard";
import AboutCard from "../../components/about-card/AboutCard";
import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <Navbar />
      <div className="grid-container">
        <ProfileCard />
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
