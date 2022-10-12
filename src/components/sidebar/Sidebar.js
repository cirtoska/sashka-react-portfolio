import React from "react";
import "./Sidebar.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  BsHouse,
  BsEnvelope,
  BsLinkedin,
  BsGithub,
  BsFacebook,
} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="letter A" />
        </Link>
      </div>
      <div className="pages">
        <ul className="page-navigation">
          <li>
            <Link to="/">
              <BsHouse className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineUser className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <FaEye className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <BsEnvelope className="icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="social">
        <ul className="social-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/aleksandra-chirtoska-30b42b230/"
              target="_blank"
            >
              <BsLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/cirtoska" target="_blank">
              <BsGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/saska.saska/" target="_blank">
              <BsFacebook className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
