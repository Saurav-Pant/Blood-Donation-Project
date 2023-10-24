import React from "react";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from "react-router-dom";
import LogIn from "../asset/LogIn.png";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
// formik and yup validation 
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
   
  const navigate = useNavigate();

  // Initial values of form 
  const initialValues = {
    name:"",
    email:"",
    password:""
  }
  // validation by YUP 
  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required'),
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string()
      .min(6, 'Password must be 6 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .required('required'),
    //-------------- If Require in future------------//

      // .matches(/[A-Z]/, 'Password requires an uppercase letter')
      // .matches(/[^\w]/, 'Password requires a symbol')
  })
  // OnSubmit function
  const onSubmit = async (values) => {
    const {name,email,password} = values
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
        toast.success('Sign Up successful!');
        navigate("/register-donor");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.log(error)
      toast.error('Signup failed. Please try again.');
    }
  };
  // formik 
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  return (
    <>
    <div className="flex justify-evenly items-center h-screen bg-gray-100">
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
            onSubmit={formik.handleSubmit}
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
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.name ? <div  className='text-red-500'>{formik.errors.name}</div> : null}
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
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-leftt"
                id="email"
                placeholder="Email address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.email ? <div  className='text-red-500'>{formik.errors.email}</div> : null}
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
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left"
                id="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.password ? <div className='text-red-500'>{formik.errors.password}</div> : null}
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-500 transition-colors duration-300 ease-in-out"
              >
                Sign Up
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
    <ToastContainer />   
    </>  
  );
};

export default SignUp;
