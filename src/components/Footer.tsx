"use client"
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from 'react-icons/ri'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 shadow-2xl bg-slate-700 rounded-2xl text-white mt-6 mb-1 mx-4">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between md:items-center">
          <div
            className="text-center md:text-left md:w-1/2 md:mb-0"
          >
            <h2 className="text-lg font-mono hover:text-red-400">
              Blood Donation Project
            </h2>
            <p className="mt-2 hover:text-red-200 font-light">
              Saving Lives Through Blood Donation
            </p>
            <p>Feel free to to request a feature by visiting github & raising issue</p>
          </div>
          <div
            className="flex justify-center md:justify-end md:w-1/2 mt-4"
          >
            <div className="flex space-x-8">
              <Link
                href="https://github.com/Saurav-Pant/Blood-Donation-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <BsGithub size={30} className="hover:text-red-300" />
              </Link>
              <Link
                href="https://twitter.com/Saurav_Pant_"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <RiTwitterXFill size={30} className="hover:text-red-300" />
              </Link>
            </div>
          </div>
        </div>
        <p
          className="mt-8 text-center text-sm text-gray-400 hover:text-red-300 transition-colors duration-300 ease-in-out"
        >
          &copy; {new Date().getFullYear()} Blood Donation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
