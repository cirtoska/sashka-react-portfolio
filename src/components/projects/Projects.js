import React, { useState } from "react";

import Modal from "../modal/Modal";

const Projects = ({ listProjects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const toggleModal = (currentProject) => {
    setCurrentProject(currentProject);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <article className="list-projects">
        {listProjects.map((project) => {
          const { id, cover, title } = project;
          return (
            <div key={id}>
              <div className={`project-card card-${id}`}>
                <div className="img-zoom">
                  <img
                    src={cover}
                    alt={title}
                    onClick={() => toggleModal(project)}
                  />
                </div>

                <h3>{title}</h3>
              </div>
              {isModalOpen && (
                <Modal
                  onClose={toggleModal}
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                  listProjects={listProjects}
                />
              )}
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Projects;
