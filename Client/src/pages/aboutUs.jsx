import React from "react";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";

const aboutUs = () => {
  return (
    <>
      <div className="pt-24">
        <OurMission />
        <Collaborators />
      </div>
    </>
  );
};

export default aboutUs;
