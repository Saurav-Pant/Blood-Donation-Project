"use client"
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from 'react-icons/ri'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Footer = () => {
  const { setTheme } = useTheme();
  return (
    <footer className="py-10 shadow-2xl bg-slate-700 rounded-2xl text-white mt-6 mb-1 mx-4">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between md:items-center">
          <div
            className="text-center md:text-left md:w-1/2 md:mb-0"
          >
            <h2 className="text-lg font-mono hover:text-red-800">
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

            <div className="flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="transform hover:-translate-y-1 transition-transform duration-300">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
            </div>
          </div>
        </div>
        <p
          className="mt-8 text-center text-sm text-gray-400 hover:text-red-800 transition-colors duration-300 ease-in-out"
        >
          &copy; {new Date().getFullYear()} Blood Donation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
