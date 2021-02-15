import React, { useEffect } from "react";

import { useGlobalContext } from "../../context";
import Slider from "./Slider/Slider";
import Hero from "./Hero/Hero";
import Sector from "./Sector/Sector";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const { setPath } = useGlobalContext();

  useEffect(() => {
    setPath("home");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Parent">
      <Slider />
      <Hero />
      <Sector />
      <Footer />
    </div>
  );
};

export default Home;
