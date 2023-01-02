import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { BsHouse, BsEnvelope } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav>
        <ul className={isNavExpanded ? "nav-links expanded" : "nav-links"}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active btn btn-nav" : "link btn btn-nav"
              }
              end
            >
              home
              <BsHouse className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active btn btn-nav" : "link btn btn-nav"
              }
            >
              about
              <AiOutlineUser className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "active btn btn-nav" : "link btn btn-nav"
              }
            >
              portfolio
              <FaEye className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active btn btn-nav" : "link btn btn-nav"
              }
            >
              contact
              <BsEnvelope className="icon" />
            </NavLink>
          </li>
        </ul>
        <button
          className="hamburger-btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
