import React from "react";
import { motion } from "framer-motion";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-10 mx-5 shadow-2xl bg-slate-700 rounded-2xl text-white">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between md:items-center">
          <div className="text-center md:text-left md:w-1/2 md:mb-0">
            <h2 className="text-lg font-bold hover:text-red-400">
              Blood Donation Project
            </h2>
            <p className="mt-2 hover:text-red-200">
              Saving Lives Through Blood Donation
            </p>
          </div>
          <motion.div
            className="flex justify-center md:justify-end md:w-1/2 mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-8">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition-colors duration-300 ease-in-out"
              >
                <BsTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition-colors duration-300 ease-in-out"
              >
                <BsInstagram size={30} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition-colors duration-300 ease-in-out"
              >
                <BsFacebook size={30} />
              </a>
            </div>
          </motion.div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400 hover:text-red-300 transition-colors duration-300 ease-in-out ">
          &copy; {new Date().getFullYear()} Blood Donation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
