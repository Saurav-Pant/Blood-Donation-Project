import React from 'react'
import { Link } from 'react-router-dom'
import error from "../asset/404.jpg"

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops The page you are looking for does not exist
      </p>
      <img
        src={error}
        alt="404 Error"
        className="w-64 h-64 mb-8"
      />
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
