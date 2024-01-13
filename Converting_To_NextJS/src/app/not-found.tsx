"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[90vh]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h1 className="text-4xl text-red-500 font-bold mb-4 animate-bounce delay-1000">
        Page Not Found
      </h1>

      <p className="text-lg mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-red-300 hover:bg-red-500 transition-colors duration-200  "
      >
        Go back to homepage
      </Link>
    </motion.div>
  );
};

export default PageNotFound;
