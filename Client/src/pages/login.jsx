import React from "react";
import LogIn from "../asset/LogIn.png";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex justify-evenly items-center h-screen bg-gray-100">
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, position: "relative", left: "-100px" }}
        animate={{ opacity: 1, position: "relative", left: "0px" }}
        transition={{ duration: 1 }}
      >
        <img
          src={LogIn}
          alt="logo"
          className="h-96 w-96 rounded-full shadow-xl"
        />
      </motion.div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:ml-6">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center">
              <div className="border-b border-gray-300 w-full mr-3"></div>
              <span className="text-gray-500">OR</span>
              <div className="border-b border-gray-300 w-full ml-3"></div>
            </div>
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-full flex items-center mr-2"
              >
                Facebook
              </a>
              <a
                href="#"
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-full flex items-center"
              >
                Google
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;

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


