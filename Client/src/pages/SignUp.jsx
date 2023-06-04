import React from "react";
import LogIn from "../asset/LogIn.png";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SignUp = () => {
  return (
    <div className="flex justify-evenly items-center h-screen bg-gray-100">
        <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-ful font-bold bg-gradient-to-br h-20 w-40 transition-colors duration-300 ease-in-out"
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
        className="w-screen max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-center items-center hover:bg-red-50 transition-colors duration-500 ease-in-out"
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
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-500"
              >
                Sign in
              </button>
            </div>
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
              className="px-4 py-2 rounded-full flex items-center mr-2 hover:transform hover:-translate-y-1 transition duration-300"
            >
              <BsFacebook className="text-blue-500" size="30" />
            </Link>

            <Link
              href="#"
              className="px-4 py-2 rounded-full flex items-center hover:transform hover:-translate-y-1 transition duration-300"
            >
              <FcGoogle className="text-gray-700" size="30" />
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

// import React from 'react';
// import LogIn from "../asset/LogIn.png";

// const LoginForm = () => {
//   return (
//     <section className="h-screen bg-gray-100">
//       <div className="container h-full mx-auto flex justify-center items-center">
//       <div className="flex justify-center items-center mb-6 md:w-1/2">
//             <img
//               src={LogIn}
//               className="w-48"
//               alt="Phone image"
//             />
//           </div>
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">

//           <div className="md:w-1/2 md:ml-6">
//             <form>
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="text"
//                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="email"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="password"
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox"
//                   />
//                   <span className="ml-2 text-gray-700">Remember me</span>
//                 </label>
//               </div>
//               <div className="mb-6">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>
//             <div className="flex items-center justify-center">
//               <div className="border-b border-gray-300 w-full mr-3"></div>
//               <span className="text-gray-500">OR</span>
//               <div className="border-b border-gray-300 w-full ml-3"></div>
//             </div>
//             <div className="flex items-center justify-center mt-6">
//               <a
//                 href="#"
//                 className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-full flex items-center mr-2"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="#"
//                 className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-full flex items-center"
//               >
//                 Google
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;
