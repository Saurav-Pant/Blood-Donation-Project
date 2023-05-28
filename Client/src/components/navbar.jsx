import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const [PhoneView, SetPhoneView] = useState(false);

  return (
    <div className="flex items-center justify-around px-4 py-2">
      <div className="flex items-center rounded-full border-2 border-red-500 p-2">
        <Link to="/" className="text-red-500">
          <BiDonateBlood size={50} className=" hidden sm:block" />
          <BiDonateBlood size={30} className="sm:hidden " />
        </Link>
      </div>
      <motion.div
        className="flex items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <ul className="hidden sm:flex">
          <li className="ml-8  hover:text-red-400 transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-8  hover:text-red-400 transition-colors duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-8  hover:text-red-400 transition-colors duration-300 ">
            <Link to="/find-blood">Find Blood</Link>
          </li>
          <li className="ml-8  hover:text-red-400 transition-colors duration-300">
            <Link to="/signup">Register Now</Link>
          </li>
        </ul>
        <motion.button
          className="ml-10 px-4 py-2 rounded border-2 hidden sm:flex border-black hover:opacity-80 transition-colors duration-300 "
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
          initial={{ opacity: 0, position: "relative", right: "-100px" }}
          animate={{ opacity: 1, position: "relative", right: "0px" }}
          transition={{ duration: 1 }}
        >
          Log In
        </motion.button>
      </motion.div>
      <div>
        <motion.button
          onClick={toggleTheme}
          className="flex justify-center items-center text-3xl rounded-full  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.2 }}
          whileInView={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.8 }}
        >
          {theme.icon}
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
