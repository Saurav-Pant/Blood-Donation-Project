import React from "react";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/Collaborators";
import GetBlood from "../components/GetBlood";

const home = () => {
  return (
    <div>
      <Hero />
      <OurMission />
      <Collaborators />
      <getBlood />
    </div>
  );
};

export default home;
