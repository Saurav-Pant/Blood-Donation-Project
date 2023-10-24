import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";
import GetBlood from "../components/getBlood";
import MatchingBloodGroup from "../components/MatchingBloodGroup";

const home = () => {
  return (
    <div className="overflow-hide">
      {/* Commmented stuff */}
      <Hero />
      <OurMission />
      <MatchingBloodGroup />
      <Collaborators />
      <GetBlood />
      
    </div>
  );
};

export default home;
