import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourmission";
import Collaborators from "../components/collaborators";
import GetBlood from "../components/getBlood";

const home = () => {
  return (
    <div>
      <Hero />
      <OurMission />
      <Collaborators />
      <GetBlood/>
    </div>
  );
};

export default home;
