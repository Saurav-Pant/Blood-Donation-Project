import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LogIn from "../asset/LogIn.png";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signup",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        navigate("/register-donor");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="flex px-3 md:px-0 justify-evenly items-center h-screen bg-gray-100">
      <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-full font-bold bg-gradient-to-br h-20 w-40 transition-colors duration-300 ease-in-out"
        >
          <motion.span
            initial={{ opacity: 0, position: "relative", left: "-100px" }}
            animate={{ opacity: 1, position: "relative", left: "0px" }}
            transition={{ duration: 2.5 }}
          >
            <IoMdArrowRoundBack size={50} color="red" />
          </motion.span>
        </Link>
      </div>
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, position: "relative", left: "-100px" }}
        animate={{ opacity: 1, position: "relative", left: "0px" }}
        transition={{ duration: 2 }}
      >
        <img
          src={LogIn}
          alt="logo"
          className="h-96 w-96 rounded-3xl shadow-md hover:bg-red-50 transition-colors duration-500 ease-in-out"
        />
      </motion.div>
      <motion.div
        className="w-screen w-1/2 max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-center items-center hover:bg-red-50 transition-colors duration-500 ease-in-out"

        initial={{
          opacity: 0,
          position: "relative",
          right: "-200px",
        }}
        animate={{
          opacity: 1,
          position: "relative",
          right: "0px",
        }}
        transition={{ duration: 1 }}
      >
        <div className="">
          <motion.form
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter Name
              </label>
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-500 transition-colors duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
            {error && <p className="text-red-500 mb-4 text-center animate-bounce">{error}</p>}
          </motion.form>

          <div className="flex items-center justify-center">
            <div className="border-b border-gray-300 w-full mr-3"></div>
            <span className="text-gray-500">OR</span>
            <div className="border-b border-gray-300 w-full ml-3"></div>
          </div>
          <motion.div
            className="flex items-center justify-center mt-6"
            initial={{
              opacity: 0,
              position: "relative",
              bottom: "-100px",
            }}
            animate={{
              opacity: 1,
              position: "relative",
              bottom: "0px",
            }}
            transition={{ duration: 1 }}
          >
            <Link
              href="#"
              className="px-4 py-2 rounded-xl flex items-center bg-red-400 text-white font-bold hover:bg-red-500 transition-colors duration-300 ease-in-out"
            >
              <button className="flex items-center justify-center w-full focus:outline-none">
                Sign Up with <FcGoogle className="ml-3" size={20} />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="mt-6 text-center"
            initial={{
              opacity: 0,
              position: "relative",
              left: "-250px",
            }}
            animate={{
              opacity: 1,
              position: "relative",
              left: "0px",
            }}
            transition={{ duration: 2 }}
          >
            <span className="text-gray-700">Already have an account?</span>
            <Link
              to="/login"
              className="text-blue-500  font-bold pl-3 hover:text-red-400 transition-colors duration-300 ease-in-out "
            >
              LogIn
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
