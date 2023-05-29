import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourMission";
import Collaborators from "../components/collaborators";
import Footer from "../components/footer";
import GetBlood from "../components/getBlood";

const home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurMission />
      <Collaborators />
      <GetBlood />
      
    </div>
  );
};

export default home;
