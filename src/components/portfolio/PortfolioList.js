import React, { useState } from "react";
import "./PortfolioList.scss";

import projects from "../../data/portfolio.json";
import Categories from "../categories/Categories";
import Projects from "../projects/Projects";

const allCategories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const PortfolioList = () => {
  const [listProjects, setListProjects] = useState(projects);
  const [categories, setCategories] = useState(allCategories);

  const filterProjects = (category) => {
    if (category === "all") {
      setListProjects(projects);
      return;
    }
    const newProjects = projects.filter(
      (project) => project.category === category
    );
    setListProjects(newProjects);
  };

  console.log(categories);
  return (
    <section className="portfolio-box">
      <h1 className="title">My Work</h1>
      <div className="subtitle">
        <h2>Check out some of my projects...</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterProjects={filterProjects} />
      <Projects projects={listProjects} />
    </section>
  );
};

export default PortfolioList;
