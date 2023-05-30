import React from "react";
import LogIn from "../asset/LogIn.png";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex justify-evenly items-center h-screen bg-gray-100">
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, position: "relative", left: "-100px" }}
        animate={{ opacity: 1, position: "relative", left: "0px" }}
        transition={{ duration: 1 }}
      >
        <img
          src={LogIn}
          alt="logo"
          className="h-96 w-96 rounded-full shadow-xl"
        />
      </motion.div>
      <motion.div
        className="bg-white p-8 rounded-lg shadow-2xl h-72"
        initial={{ opacity: 0, position: "relative", right: "-100px" }}
        animate={{ opacity: 1, position: "relative", right: "0px" }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 hover:text-red-300 transition-colors duration-300 ease-in-out">
          Login to Your Account
        </h1>
        <form className="flex flex-col space-y-4">
          <label className="font-light mb-1">Mobile:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3  text-gray-500">
              +91
            </span>
            <input
              type="tel"
              placeholder="Enter your phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              className="pl-14 border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500 text-red-300"
            />
          </div>
          <button className="bg-red-600 hover:bg-red-400 text-white font-semibold py-3 rounded-md transition-colors duration-300 w-28 shadow-xl">
            Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
