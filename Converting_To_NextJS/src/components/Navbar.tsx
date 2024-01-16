"use client"
import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";


const Navbar = () => {
  const { userId } = useAuth();
  return (
    <motion.nav
      className="sticky top-0 px-4 py-1 flex items-center justify-between shadow-md z-10 bg-slate-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex items-center rounded-full border-2 border-red-500 p-2">
        <Link href="/" className="text-red-500">
          <BiDonateBlood size={30} className=" hidden sm:block" />
          <BiDonateBlood size={30} className="sm:hidden " />
        </Link>
      </div>
      {userId ?
        (
          <ul className=" font-mono text-xl sm:flex nav-menu">
            <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
              <Link href="/FindBlood">Find Blood</Link>
            </li>

            <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item rounded ">
              <Link href="/DonorForm">Register Donor</Link>
            </li>

            {/* <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item rounded ">
              <Link href="/OrgForm">Register Organization</Link>
            </li> */}
          </ul>) : (
          null
        )
      }

      {!userId ?
        (
          <div className="flex justify-between items-center">
            <Link href="/sign-up">
              <motion.button
                className="px-4 py-2 rounded sm:flex ml-8 bg-red-200 hover:bg-red-300 transition-all duration-100 text-black"
                whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
              >
                Sign Up
              </motion.button>
            </Link>
            <Link href="/sign-in">
              <motion.button
                className="px-4 py-2 rounded  sm:flex ml-8 bg-red-200 hover:bg-red-300 transition-all duration-100 text-black"
                whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
              >
                Sign In
              </motion.button>
            </Link>
          </div>) :
        (
          <div>
            <UserButton afterSignOutUrl="/"/>
          </div>

        )
      }
    </motion.nav>
  );
};

export default Navbar;
