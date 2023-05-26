import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurMission/>
      <Collaborators/>
    </div>
  );
};

export default home;
