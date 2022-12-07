import React, { useState } from "react";
import { useGlobalContext } from "../context/ModalContext";
import Modal from "../modal/Modal";

const Projects = ({ listProjects }) => {
  console.log("Projects", listProjects);
  const { openModal } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="list-projects">
        {listProjects.map((project) => {
          const { id, cover, title } = project;
          return (
            <>
              <div key={id} className={`project-card card-${id}`}>
                <div className="img-zoom">
                  <img src={cover} alt={title} onClick={openModal} />
                </div>

                <h3>{title}</h3>
              </div>
              {openModal && <Modal listProjects={listProjects} />}
            </>
          );
        })}
      </article>
    </>
  );
};

export default Projects;
