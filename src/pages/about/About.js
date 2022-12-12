import React from "react";
import Navbar from "../../layout/navbar/Navbar";
import ProfileCard from "../../components/profile-card/ProfileCard";
import AboutCard from "../../components/about-card/AboutCard";
import "./About.scss";
import Footer from "../../layout/footer/Footer";
import Resume from "../../components/resume/Resume";

const About = () => {
  return (
    <>
      <main id="about">
        <Navbar />
        <div className="grid-container">
          <ProfileCard />
          <AboutCard />
        </div>
        <Resume />
      </main>
      <Footer />
    </>
  );
};

export default About;
