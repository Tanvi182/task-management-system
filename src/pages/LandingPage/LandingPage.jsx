// src/pages/LandingPage/LandingPage.jsx
import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Service />
      <About />
      <Testimonials />
    </>
  );
};

export default LandingPage;
