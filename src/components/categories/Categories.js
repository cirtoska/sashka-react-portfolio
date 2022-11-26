import React from "react";
import { data } from "../../data/portfolioData";
import "./Categories.scss";

const Categories = ({ setListProjects, filterProjects, menuItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => setListProjects(data)}>
        All
      </button>
      {menuItems.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
