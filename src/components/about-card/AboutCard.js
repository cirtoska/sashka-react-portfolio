import React from "react";
import "./AboutCard.scss";

const AboutCard = () => {
  return (
    <section className="about-box">
      <h2 className="title">About Me</h2>
      <div className="text">
        <p>
          Responsible and meticulous Web Administrator & Designer with a 13+
          years working experience in the internet industry. After completing an
          extensive web development program, I found my new passion for coding.
          Now I'm looking forward to start up my new career as a Frontend
          Developer.
        </p>
        <p>
          Technically minded person, independent employee, problem solver with
          an understanding of HTML, CSS, JavaScript, React and other web
          technologies. With ability to learn new skills quickly.
        </p>
        <p>A family person, loving wife and mother of two outstanding girls.</p>
        <p>
          Interested in the entire frontend and backend spectrum and working on
          ambitious projects with positive people.
        </p>
      </div>
      <div className="subtitle">
        <h2>my motto in life</h2>
        <div className="underline"></div>
      </div>
      <blockquote>
        "The cave you fear to enter holds the treasure you seek."
        <cite>Joseph Campbell</cite>
      </blockquote>
    </section>
  );
};

export default AboutCard;
