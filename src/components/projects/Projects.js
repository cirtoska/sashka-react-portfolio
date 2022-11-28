import React from "react";
import { useGlobalContext } from "../context/ModalContext";
import Modal from "../modal/Modal";

const Projects = ({ listProjects }) => {
  console.log("Projects", listProjects);
  const { openModal } = useGlobalContext();
  return (
    <article className="list-projects">
      {listProjects.map((project) => {
        const {
          id,
          cover,
          title,
          githubUrl,
          liveUrl,
          categories,
          technology,
          date,
          description,
          responsive,
        } = project;
        return (
          <div key={id} className={`project-card card-${id}`}>
            <div className="img-zoom">
              <img src={cover} alt={title} onClick={openModal} />
            </div>
            {openModal && (
              <Modal
                cover={cover}
                id={id}
                title={title}
                githubUrl={githubUrl}
                liveUrl={liveUrl}
                categories={categories}
                technology={technology}
                date={date}
                description={description}
                responsive={responsive}
              />
            )}
            <h3>{title}</h3>
          </div>
        );
      })}
    </article>
  );
};

export default Projects;
