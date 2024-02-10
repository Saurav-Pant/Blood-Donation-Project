"use client";
import React, { useEffect, useState } from "react";
import { BiDonateBlood } from "react-icons/bi";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = ({ isOpen, onClose }: any) => {
  const { setTheme } = useTheme();

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed left-0 top-0 w-80 bg-white dark:bg-black h-full shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center">
            <Link href="/" className="text-red-800">
              <BiDonateBlood size={30} />
            </Link>
            <button onClick={onClose}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-red-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <ul className="p-4">
              <li className="mb-4 hover:text-red-800 transition-colors duration-300">
                <Link href="/FindBlood">Find Blood</Link>
              </li>
              <li className="mb-4 hover:text-red-800 transition-colors duration-300">
                <Link href="/DonorForm">Register Donor</Link>
              </li>
              <li className="mb-4 hover:text-red-800 transition-colors duration-300">
                <Link href="/OrgForm">Register Organization</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed bottom-8 right-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
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
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { userId } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setTheme } = useTheme();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileUpdate = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseSidebar = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 px-4 py-1 flex items-center justify-between shadow-md z-10 bg-slate-50 dark:bg-[#191818]">
        <div className="flex items-center rounded-full border-2 border-red-800 p-2">
          <Link href="/" className="text-red-800">
            <BiDonateBlood size={30} />
          </Link>
        </div>
        {windowWidth <= 768 && userId && (
          <button
            className="text-red-800 focus:outline-none"
            onClick={handleMobileUpdate}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        )}
        {windowWidth <= 768 || !userId ? null : (
          <div className="">
            <ul className="p-4 flex">
              <li className="mr-4  hover:text-red-800 transition-colors duration-300">
                <Link href="/FindBlood">Find Blood</Link>
              </li>
              <li className="mr-4 hover:text-red-800 transition-colors duration-300">
                <Link href="/DonorForm">Register Donor</Link>
              </li>
              <li className="hover:text-red-800 transition-colors duration-300">
                <Link href="/OrgForm">Register Organization</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex justify-center items-center gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
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
          {!userId ? (
            <div className="flex justify-between items-center">
              <Link href="/sign-up">
                <button className="px-2 lg:px-4  py-2  rounded sm:flex ml-8 bg-red-200 hover:bg-red-300 transition-all duration-100 text-black">
                  Sign Up
                </button>
              </Link>
              <Link href="/sign-in">
                <button className="px-2 lg:px-4 py-2  rounded  sm:flex ml-8 bg-red-200 hover:bg-red-300 transition-all duration-100 text-black">
                  Sign In
                </button>
              </Link>
            </div>
          ) : (
            userId && (
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            )
          )}
        </div>
      </nav>
      {windowWidth <= 768 && (
        <Sidebar isOpen={menuOpen} onClose={handleCloseSidebar} />
      )}
    </>
  );
};

export default Navbar;
