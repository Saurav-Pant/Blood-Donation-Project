import React from 'react';
import { Link } from 'react-router-dom';
import error from "../asset/404.jpg";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
           <h1 className="text-4xl text-red-500 font-bold mb-4 animate-bounce delay-1000" >
        Page Not Found
      </h1>

      <p className="text-lg mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-red-300 hover:bg-red-500 transition-colors duration-200 "
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
