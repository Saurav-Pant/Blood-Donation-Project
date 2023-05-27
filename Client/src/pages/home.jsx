import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";
import getBlood from "../components/getBlood";

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
