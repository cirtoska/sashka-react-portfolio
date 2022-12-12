import React from "react";
import { FaRobot } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <FaRobot className="icon" />
      <p className="created">
        Created by <span className="signature">SashkaChi.</span> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
