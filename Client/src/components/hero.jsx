import React, { useContext } from "react";
import blood from "../asset/blood3.png";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center mt-5  md:min-h-screen  ">
      <div className="flex flex-col md:order-2 md:ml-8 w-[60vh] mx-5 ">
        <h1 className="text-3xl lg:text-6xl font-bold font-serif text-center hover:text-red-300 transition-colors duration-300 ease-in-out ">
          Save Life Donate Blood
        </h1>

        <p className="text-xl pt-5 text-justify mx-16 font-mono">
          Donate blood to save lives. Your blood donation can save a life and
          help others to live a better life and make a better future for their
          families.
        </p>
        <motion.button
          className="mt-12 px-6 py-3 rounded-md hover:opacity-80 transition-colors duration-300 w-40 mx-16 mb-3"
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
          initial={{ opacity: 0, position: "relative", left: "-50px" }}
          animate={{ opacity: 1, position: "relative", left: "0px" }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}

        >
          Get Blood Now
        </motion.button>
      </div>
      <motion.div
        className="md:order-1 w-[50vh]"
        initial={{ opacity: 0, position: "relative", right: "-100px" }}
        animate={{ opacity: 1, position: "relative", right: "0px" }}
        transition={{ duration: 1 }}
      >
        <img src={blood} alt="blood" />
      </motion.div>
    </div>
  );
};

export default Hero;
