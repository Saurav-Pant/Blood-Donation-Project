import React from "react";
import { motion } from "framer-motion";
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from 'react-icons/ri'
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="py-10 mx-5 shadow-2xl bg-slate-700 rounded-2xl text-white mt-6 mb-1 ">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between md:items-center">
          <motion.div
            className="text-center md:text-left md:w-1/2 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            animate={{
              opacity: 1,
              position: "relative",
              x: 0,
            }}
          >
            <h2 className="text-lg font-mono hover:text-red-400">
              Blood Donation Project
            </h2>
            <p className="mt-2 hover:text-red-200 font-light">
              Saving Lives Through Blood Donation
            </p>
            <p>Feel free to to request a feature by visiting github & raising issue</p>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end md:w-1/2 mt-4"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            animate={{
              opacity: 1,
              position: "relative",
              x: 0,
            }}
          >
            <div className="flex space-x-8">
            {/* Twitter Link */}
              <Link
                to="https://github.com/Saurav-Pant/Blood-Donation-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <BsGithub size={30} className="hover:text-red-300" />
              </Link>
              {/* Github Link */}
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <RiTwitterXFill size={30} className="hover:text-red-300" />
              </Link>
              {/* Instagram link */}
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <BsInstagram size={30} className="hover:text-red-300" />
              </Link>
              {/* Facebook link */}
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <BsFacebook size={30} className="hover:text-red-300" />
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.p
          className="mt-8 text-center text-sm text-gray-400 hover:text-red-300 transition-colors duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          animate={{
            opacity: 1,
            position: "relative",
            y: 0,
          }}
        >
          &copy; {new Date().getFullYear()} Blood Donation. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default footer;
