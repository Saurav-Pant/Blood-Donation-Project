import React from "react";
import Navbar from "../components/Navbar";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";

const aboutUs = () => {
  return (
    <>
      <div className="pt-10">
        <OurMission />
        <Collaborators />
      </div>
      ;
    </>
  );
};

export default aboutUs;
