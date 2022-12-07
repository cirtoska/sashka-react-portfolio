import React from "react";
import { useGlobalContext } from "../context/ModalContext";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaCode,
  FaGit,
  FaFolderOpen,
  FaGlobe,
  FaCalendarAlt,
  FaMobileAlt,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaCheck,
  FaCheckCircle,
} from "react-icons/fa";
import "./Modal.css";

const Modal = ({ listProjects }) => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen
          ? "modal-overlay show-modal animate__animated animate__slideInLeft"
          : "modal-overlay animate__animated animate__slideOutLeft"
      }`}
    >
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
                  <FaFolderOpen className="icon" />
                  Project: {categories}
                </div>
                <div className="grid-item">
                  <FaCode className="icon" />
                  Technology: {technology + " "}
                </div>
                <div className="grid-item">
                  <FaMobileAlt className="icon" /> Responsive:{" "}
                  {{ responsive } ? (
                    <FaCheckCircle className="icon" />
                  ) : (
                    <FaRegTimesCircle className="icon" />
                  )}
                </div>
                <div className="grid-item">
                  <FaCalendarAlt className="icon" /> {date}
                </div>

                <div className="grid-item">
                  <FaExternalLinkAlt className="icon" /> Preview:
                  <a href={githubUrl} target="_blank">
                    <FaGit className="icon" /> {githubUrl}
                  </a>
                </div>
                <div className="grid-item">
                  <FaGlobe className="icon" />
                  Demo:
                  <a href={liveUrl} target="_blank">
                    {liveUrl}
                  </a>
                </div>
              </article>
              <button className="close-modal-btn" onClick={closeModal}>
                <FaTimes></FaTimes>
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Modal;
