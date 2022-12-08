import React, { useState } from "react";
import "./PortfolioList.scss";

import { data } from "../../data/portfolioData";
import Categories from "../categories/Categories";
import Projects from "../projects/Projects";

const PortfolioList = () => {
  const [listProjects, setListProjects] = useState(data);

  const menuItems = [...new Set(data.map((item) => item.categories))];

  const filterProjects = (curcat) => {
    const newProject = data.filter((newItem) => {
      return newItem.categories === curcat;
    });
    setListProjects(newProject);
  };

  return (
    <section className="portfolio-box">
      <h1 className="title">My Work</h1>
      <div className="subtitle">
        <h2>Check out some of my projects...</h2>
        <div className="underline"></div>
      </div>
      <Categories
        setListProjects={setListProjects}
        filterProjects={filterProjects}
        menuItems={menuItems}
      />
      <Projects listProjects={listProjects} />
    </section>
  );
};

export default PortfolioList;
