import React from 'react';
import { Link } from 'react-router-dom';
import error from "../asset/404.jpg";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-4 animated-heading">Page Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
