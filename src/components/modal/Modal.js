import React from "react";
import { GrNext, GrClose, GrPrevious } from "react-icons/gr";
import {
  FaExternalLinkAlt,
  FaCode,
  FaGit,
  FaFolderOpen,
  FaGlobe,
  FaCalendarAlt,
  FaMobileAlt,
  FaRegTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";
import "./Modal.css";

const Modal = ({
  onClose,
  currentProject,
  setCurrentProject,
  listProjects,
}) => {
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
  } = currentProject;

  // const nextProject = () => {
  //   setCurrentProject(
  //     currentProject === listProjects.length - 1 ? 0 : currentProject + 1
  //   );
  // };
  // console.log(listProjects.length - 1);

  // const prevProject = () => {
  //   setCurrentProject(
  //     currentProject === 0 ? listProjects.length - 1 : currentProject - 1
  //   );
  // };

  return (
    <div className="modal-overlay show-modal animate__animated animate__slideInLeft">
      <section className="modal-box" key={id}>
        <h2 className="project-title">{title}</h2>
        <div className="modal-container">
          <article className="project-img">
            <img src={cover} alt={title} />
          </article>
          <article className="project-info">
            <div className="desc">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div className="grid-item">
              <FaFolderOpen className="modal-icon" />
              <span> Project: {categories}</span>
            </div>
            <div className="grid-item">
              <FaCode className="modal-icon" />
              Technology: {technology + " "}
            </div>
            <div className="grid-item">
              <FaMobileAlt className="modal-icon" /> Responsive:{" "}
              {responsive ? (
                <FaCheckCircle className="modal-icon" />
              ) : (
                <FaRegTimesCircle className="modal-icon" />
              )}
            </div>
            <div className="grid-item">
              <FaCalendarAlt className="modal-icon" />
              Created: {date}
            </div>

            <div className="grid-item">
              <FaExternalLinkAlt className="modal-icon" /> Preview:
              <a href={githubUrl} target="_blank">
                <FaGit className="modal-icon" /> {githubUrl}
              </a>
            </div>
            <div className="grid-item">
              <FaGlobe className="modal-icon" />
              Demo:
              <a href={liveUrl} target="_blank">
                {liveUrl}
              </a>
            </div>
          </article>
          {/* <button className="next-btn" onClick={nextProject}>
            <GrNext />
          </button>
          <button className="prev-btn" onClick={prevProject}>
            <GrPrevious />
          </button> */}
          <button className="close-modal-btn" onClick={onClose}>
            <GrClose />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
