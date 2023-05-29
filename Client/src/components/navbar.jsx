import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-10 px-4 py-2 flex items-center justify-between "
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex items-center rounded-full border-2 border-red-500 p-2">
        <Link to="/" className="text-red-500">
          <BiDonateBlood size={50} className=" hidden sm:block" />
          <BiDonateBlood size={30} className="sm:hidden " />
        </Link>
      </div>
      <ul className="flex font-mono text-xl">
        <li className="ml-8 hover:text-red-400 transition-colors duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300">
          <Link to="/about">About Us</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300">
          <Link to="/find-blood">Find Blood</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300">
          <Link to="/signup">Register Now</Link>
        </li>
      </ul>
      <Link to="/login">
        <motion.button
          className="ml-10 px-4 py-2 rounded border-2 hidden sm:flex border-black"
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
          whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
        >
          Log In
        </motion.button>
      </Link>
      <motion.button
        onClick={toggleTheme}
        className="flex justify-center items-center text-3xl rounded-full"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {theme.icon}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
