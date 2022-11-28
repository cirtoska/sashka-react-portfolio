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

const Modal = ({
  cover,
  title,
  id,
  githubUrl,
  liveUrl,
  categories,
  technology,
  date,
  description,
  responsive,
}) => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>{title}</h3>
        <div className="project-info">
          <div className="grid-item">
            <FaFolderOpen className="icon" />
            Project: {categories}
          </div>
          <div className="grid-item">
            <FaCode className="icon" />
            Technology: {technology}
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
          <div className="grid-item">{description}</div>
          <div className="grid-item">
            <FaExternalLinkAlt className="icon" /> Preview:
            <a href={githubUrl}>
              <FaGit className="icon" /> Repo
            </a>
          </div>
          <div className="grid-item">
            <FaGlobe className="icon" />
            Preview:
            <a href={liveUrl}>{liveUrl}</a>
          </div>
        </div>
        <div className="modal-img">
          <img src={cover} alt={title} />
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
