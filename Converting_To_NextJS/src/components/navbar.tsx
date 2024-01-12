"use client"
import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 z-10 px-4 py-2 flex items-center justify-between "
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex items-center rounded-full border-2 border-red-500 p-2">
        <Link href="/" className="text-red-500">
          <BiDonateBlood size={50} className=" hidden sm:block" />
          <BiDonateBlood size={30} className="sm:hidden " />
        </Link>
      </div>
      <ul className=" font-mono text-xl sm:flex nav-menu">
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
          <Link href="/about">About Us</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
          <Link href="/find-blood">Find Blood</Link>
        </li>

        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item rounded ">
          <Link href="/register-donor">Register Donor</Link>
        </li>

        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item rounded ">
          <Link href="/register-org">Register Organization</Link>
        </li>
      </ul>

      <>
        <Link href="/login">
          <motion.button
            className="ml-10 px-4 py-2 rounded border-2 sm:flex hover:bg-red-300 transition-all "
            whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
          >
            Log In
          </motion.button>
        </Link>
        <Link href="/SignUp">
          <motion.button
            className="px-4 py-2 rounded border-2 sm:flex ml-8 hover:bg-red-300 transition-all"
            whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
          >
            Sign Up
          </motion.button>
        </Link>
      </>


    </motion.nav>
  );
};

export default Navbar;
