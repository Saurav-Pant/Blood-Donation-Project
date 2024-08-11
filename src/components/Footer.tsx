"use client"
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
    <footer className="py-10 mt-6 mb-1 mx-auto w-[85%] ">
      <Separator className="mb-4 w-[60%] mx-auto" />
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between md:items-center ">
          <div className="text-center md:text-left md:w-1/2 md:mb-0">
            <h2 className="text-lg">
              Blood Donation Project
            </h2>
            <p className="mt-2  font-light">
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
                <BsGithub size={30} className="" />
              </Link>
              <Link
                href="https://twitter.com/Saurav_Pant_"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <RiTwitterXFill size={30} className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
