import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourmission";
import Collaborators from "../components/collaborators";

import getBlood from "../components/getblood";

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
