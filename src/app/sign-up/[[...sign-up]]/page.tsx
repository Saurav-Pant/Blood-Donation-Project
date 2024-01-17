"use client"
import React from "react";
import LogIn from "../../../../asset/LogIn.png";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";


const Signup = () => {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen bg-gray-100 w-full">
        <div className="absolute top-4 left-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-full font-bold bg-gradient-to-br h-20 w-40 transition-colors duration-300 ease-in-out"
          >
            <motion.span
              initial={{ opacity: 0, position: "relative", left: "-100px" }}
              animate={{ opacity: 1, position: "relative", left: "0px" }}
              transition={{ duration: 2.5 }}
            >
              <IoMdArrowRoundBack size={50} color="red" />
            </motion.span>
          </Link>
        </div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, position: "relative", left: "-100px" }}
          animate={{ opacity: 1, position: "relative", left: "0px" }}
          transition={{ duration: 2 }}
        >
          <Image
            src={LogIn}
            alt="logo"
            className="h-96 w-96 rounded-3xl shadow-md hover:bg-red-50 transition-colors duration-500 ease-in-out"
          />
        </motion.div>
        <motion.div
          className="w-screen max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-center items-center hover:bg-red-50 transition-colors duration-500 ease-in-out"
          initial={{
            opacity: 0,
            position: "relative",
            right: "-200px",
          }}
          animate={{
            opacity: 1,
            position: "relative",
            right: "0px",
          }}
          transition={{ duration: 1 }}
        >
          <SignUp/>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;
