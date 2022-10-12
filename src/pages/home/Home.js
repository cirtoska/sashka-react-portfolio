import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main id="home">
        <h1 className="display-name">Aleksandra Chirtoska</h1>
        <h3 className="title-role">web developer</h3>
      </main>
    </div>
  );
};

export default Home;
