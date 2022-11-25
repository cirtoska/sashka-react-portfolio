import React from "react";
import "./Social.scss";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Social = () => {
  return (
    <section className="social">
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
    </section>
  );
};

export default Social;
