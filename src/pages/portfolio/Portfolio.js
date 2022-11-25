import React from "react";
import "./Portfolio.scss";
import Navbar from "../../layout/navbar/Navbar";
import ProfileCard from "../../components/profile-card/ProfileCard";
import PortfolioList from "../../components/portfolio/PortfolioList";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Navbar />
      <div className="grid-container">
        <ProfileCard />
        <PortfolioList />
      </div>
    </section>
  );
};

export default Portfolio;
