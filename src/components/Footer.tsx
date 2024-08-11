"use client"
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from 'react-icons/ri'
import { IoMdMail } from "react-icons/io";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-10 mt-6 mb-1 mx-4">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between md:items-center ">
          <div className="text-center md:text-left md:w-1/2 md:mb-0">
            <h2 className="text-lg font-mono hover:text-red-800">
              Blood Donation Project
            </h2>
            <p className="mt-2 hover:text-red-200 font-light">
              Saving Lives Through Blood Donation
            </p>

          </div>
          <div className="flex justify-center md:justify-end md:w-1/2 mt-4">
            <div className="flex items-center space-x-8">
              {/* <ThemeToggler/> */}
              <Link
                href="https://github.com/Saurav-Pant/Blood-Donation-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <BsGithub size={30} className="hover:text-red-800" />
              </Link>
              <Link
                href="https://twitter.com/Saurav_Pant_"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <RiTwitterXFill size={30} className="hover:text-red-800" />
              </Link>
              
              <Link
                href="mailto:pantsaurav005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <IoMdMail size={30} className="hover:text-red-800" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
