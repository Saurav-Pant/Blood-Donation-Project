"use client";

import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import ShinyButton from "@/components/ui/shiny-button";
import OurMission from "./OurMission";
import GetBlood from "./GetBlood";

const Hero = () => {
  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mb-10">
        <div className="mx-4 mb-20 hover:shadow-md transition-all duration-300 ease-in-out">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Your blood donation can save a life and help others
            </AlertDescription>
          </Alert>
        </div>
        
        <ShinyButton text="Donate Now" className="font-bold shadow-md" />

        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-6xl font-bold mb-4 sm:mb-5 text-center mt-3">
          Save Life
          <span className="text-red-800 block sm:inline sm:ml-3">
            Donate Blood
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-6 font-normal text-center max-w-2xl">
          Donate blood to save lives. Your blood donation can save a life
          and help others to live a better life and make a better future for
          their families.
        </p>
      </div>
      <OurMission />
      <GetBlood />
    </>
  );
};

export default Hero;
