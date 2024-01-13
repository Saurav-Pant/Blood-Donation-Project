"use client";
import React from "react";
import blood from "../../asset/Header.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OurMission from "./OurMission";
import OurCollaborators from "./OurCollaborators";
import GetBlood from "./getBlood";

const Hero = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-evenly items-center mt-5  md:min-h-screen hero-section">
      <div className="flex flex-col md:order-2 md:ml-8 w-[60vh] mx-5 ">
        <h1 className="text-3xl w-11/12 m-auto lg:text-6xl font-bold font-serif text-center hover:text-red-300 transition-colors duration-300 ease-in-out ">
          Save Lifes Donate Blood
        </h1>

        <p className="text-xl pt-5 text-justify mx-16 font-mono">
          Donate blood to save lives. Your blood donation can save a life and
          help others to live a better life and make a better future for their
          families.
        </p>
        <div className="flex justify-center items-center">
          <Link href="/">
            <motion.button className="mt-12 px-6 py-3 rounded-md hover:opacity-80 transition-colors duration-300 mx-4 md:mx-16 mb-3 bg-red-300 text-white">
              Get Blood Now
            </motion.button>
          </Link>
        </div>
      </div>
      <motion.div
        className="h-[60vh] sm:mt-10 mt-0 "
        initial={{ opacity: 0, position: "relative", left: "-100px" }}
        animate={{ opacity: 1, position: "relative", left: "0px" }}
        transition={{ duration: 2 }}
      >
        <Image
          src={blood}
          alt="logo"
          className="h-96 w-96 rounded-3xl shadow-md bg-red-50 hover:bg-red-100 transition-colors duration-500 ease-in-out"
        />
      </motion.div>
    </div>
    <OurMission/>
    <OurCollaborators/>
    <GetBlood/>
    </>
  );
};

export default Hero;
