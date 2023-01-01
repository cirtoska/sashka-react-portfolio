import React from "react";
import "./Home.scss";
import Navbar from "../../layout/navbar/Navbar";

const Home = () => {
  return (
    <div className="layout">
      <div className="overlay"></div>
      <main id="home">
        <Navbar />
        <section className="title">
          <p className="eyebrow-heading animate__animated animate__bounceInLeft animate__delay-1s">
            Hello, I'm
          </p>
          <h1 className="display-name animate__animated animate__bounceInLeft animate__delay-2s">
            Aleksandra Chirtoska
          </h1>
          <h3 className="title-role animate__animated animate__bounceInLeft animate__delay-3s">
            web developer & designer
          </h3>
          <p className="animate__animated animate__bounceInLeft animate__delay-4s">
            I'm a passionate programmer that enjoys creating elegantly simple
            things.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
