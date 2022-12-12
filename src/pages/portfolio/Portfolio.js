import React from "react";
import "./Portfolio.scss";
import Navbar from "../../layout/navbar/Navbar";
import PortfolioList from "../../components/portfolio/PortfolioList";
import Footer from "../../layout/footer/Footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <main id="portfolio">
        <PortfolioList />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
