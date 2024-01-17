"use client"
import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div
      className="sm:max-h-[45vh] md:max-h-[45vh] lg:h-[30vh] pt-3 mx-5 rounded-2xl"
    >
      <h1 className="text-4xl font-bold pl-16 pt-4 font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
        Our Mission
      </h1>
      <motion.p
        className="text-lg px-16 font-light font-sans py-4 text-justify "
        initial={{ opacity: 0, position: "relative", top: "-100px" }}
        animate={{ opacity: 1, position: "relative", top: "0px" }}
        transition={{ delay: 0.3, duration: 0.7 }}
        
      >
        Our mission is to address the critical need for blood supply in the
        country by connecting donors and recipients. We provide a seamless
        platform for blood donations, bridging the gap in the supply chain. With
        a reliable system, we empower individuals to make a significant impact
        on society. Through compassion and unity, we inspire more donors, saving
        lives one donation at a time.
      </motion.p>
    </div>
  );
};

export default OurMission;
