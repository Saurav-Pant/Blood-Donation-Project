import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourmission";
import Collaborators from "../components/collaborators";
import GetBlood from "../components/getBlood"
import Footer from "../components/footer";

import getBlood from "../components/getblood";

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
