import React from "react";

const Categories = ({ categories, filterProjects }) => {
  console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
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
