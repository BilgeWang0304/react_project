import React from "react";
import Hero from "../components/Hero";
import SpecialMenu from "../components/SpecialMenu";
import About from "../components/About";
import Testimonial from "../components/Testimonial"

const Main = () => {
  return (
    <>
      <Hero />
      <SpecialMenu />
      <Testimonial />
      <About />
    </>
  );
};
export default Main;