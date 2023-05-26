import React from "react";
import blood from "../asset/blood.svg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center pt-6">
      <div className="">
        <img src={blood} alt="" className="" />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold font-serif">Save Life Donate Blood</h1>
        <p className="text-xl pt-5 ">
          Donate blood to save lives. Your blood donation can save a life and
          help others to live a better life and make a better future for their families
        </p>
      </div>
    </div>
  );
};

export default Hero;
