import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";
import GetBlood from "../components/getBlood"
import Footer from "../components/footer";

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
