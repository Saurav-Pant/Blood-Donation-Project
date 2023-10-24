import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";
import GetBlood from "../components/getBlood";

const home = () => {
  return (
    <div className="overflow-hide">
      <Hero />
      <OurMission />
      <Collaborators />
      <GetBlood />
      
    </div>
  );
};

export default home;
