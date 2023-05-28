import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/Collaborators";
import GetBlood from "../components/GetBlood";
import Hero from "../components/hero";
import OurMission from "../components/OurMission";
import Collaborators from "../components/collaborators";
import getBlood from "../components/getBlood";
import Footer from "../components/footer";

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
