import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurMission/>
    </div>
  );
};

export default home;
