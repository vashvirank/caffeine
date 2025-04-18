import React from "react";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Section />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
