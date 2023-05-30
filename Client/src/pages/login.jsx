import React from "react";
import LogIn from "../asset/LogIn.png";

const Login = () => {
  return (
    <div className="flex justify-evenly items-center h-screen bg-gray-100">
      <div className="hidden md:block">
        <img
          src={LogIn}
          alt="logo"
          className="h-96 w-96 rounded-full shadow-xl"
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-2xl h-72">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500 text-red-300"
          />
          <button className="bg-red-600 hover:bg-red-0 text-white font-semibold py-3 rounded-md transition-colors duration-300">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
