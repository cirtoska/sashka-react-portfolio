import React from "react";
import "./Home.scss";
import Navbar from "../../layout/navbar/Navbar";

const Home = () => {
  return (
    <div className="layout">
      <div className="overlay"></div>
      <main id="home">
        <section className="title">
          <Navbar />
          <p className="eyebrow-heading">Hello, I'm</p>
          <h1 className="display-name animate__animated animate__bounceInLeft">
            Aleksandra Chirtoska
          </h1>
          <h3 className="title-role">web developer & designer</h3>
          <p>
            I'm a passionate programmer that enjoys creating elegantly simple
            things.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
