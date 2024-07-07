"use client"
import React from "react";
import LogIn from "../../../../asset/LogIn.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";


const Signin = () => {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen bg-gray-100 dark:bg-black w-full">
        <div className="absolute top-16 left-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-full font-bold bg-gradient-to-br h-20 w-40 transition-colors duration-300 ease-in-out"
          >
            <span
            >
              <IoMdArrowRoundBack size={50} color="red" />
            </span>
          </Link>
        </div>
        <div
          className="hidden md:block">
          <Image
            src={LogIn}
            alt="logo"
            className="h-96 w-96 rounded-3xl shadow-md hover:bg-red-50 transition-colors duration-500 ease-in-out"
          />
        </div>
        <div
          className="w-screen max-w-md bg-white dark:bg-[#181717] rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-center items-center hover:bg-red-50 transition-colors duration-500 ease-in-out dark:bg-[rgb(225,222,222)] form-mode"
        >
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default Signin;
