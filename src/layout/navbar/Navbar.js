import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { BsHouse, BsEnvelope } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
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
      </nav>
    </header>
  );
};

export default Navbar;
