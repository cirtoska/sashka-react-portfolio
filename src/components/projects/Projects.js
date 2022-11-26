import React from "react";

const Projects = ({ listProjects }) => {
  console.log("Projects", listProjects);
  return (
    <article className="list-projects">
      {listProjects.map((project) => {
        return (
          <div key={project.id} className={`project-card card-${project.id}`}>
            <div className="img-zoom">
              <img src={project.cover} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </div>
        );
      })}
    </article>
  );
};

export default Projects;
