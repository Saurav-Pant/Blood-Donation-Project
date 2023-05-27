import React, { useContext } from "react";
import blood from "../asset/blood.svg";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <img src={blood} alt="" className="" />
      </div>
      <div className="flex-col md:flex-col">
        <h1 className="text-4xl font-bold sm:text-xl md:text-3xl lg:text-4xl font-serif">
          Save Life Donate Blood
        </h1>
        <p className="text-xl pt-5 text-justify mr-8 font-thin ">
          Donate blood to save lives. Your blood donation can save a life and
          help others to live a better life and make a better future for their
          families
        </p>
        <button
          className="mt-5 px-6 py-3  rounded-md hover:bg-gray-800 transition-colors duration-300 ml-5"
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
        >
          Get Blood Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
