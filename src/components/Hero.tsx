"use client";
import React from "react";
import OurMission from "./OurMission";
import GetBlood from "./GetBlood";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-full relative">
          <h1 className="text-5xl font-bold font-serif text-center  lg:text-8xl md:text-7xl">
            Save Life <span className="text-red-800">Donate Blood </span>
          </h1>

          <div className="mx-5 sm:mx-10 lg:mx-30 xl:mx-60 mt-5">
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-mono text-center sm:text-justify">
              Donate blood to save lives. Your blood donation can save a life
              and help others to live a better life and make a better future for
              their families.
            </p>
          </div>

          <div className="absolute top-10 right-10 h-40 w-40 bg-gradient-to-tr from-transparent to-red-200 rounded-full opacity-50"></div>
          <div className="absolute top-10 left-10 h-40 w-40 bg-gradient-to-tr from-transparent to-red-200 rounded-full opacity-50"></div>

        </div>
      </div>
      <OurMission />
      <GetBlood />
    </>
  );
};

export default Hero;
