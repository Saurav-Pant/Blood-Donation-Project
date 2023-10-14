import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import Loading from "../components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import userProfile from "../asset/avatar.png";
import { TailSpin } from "react-loader-spinner";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const handleclick = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  const handleLogo = () => {
    window.scrollTo(0, 0);
  };

  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogOut = () => {
    setLoggingOut(true);

    setTimeout(() => {
       logout({ logoutParams: { returnTo: window.location.origin } })
      localStorage.removeItem("token1");
      localStorage.removeItem("token");
      navigate("/login");
      setLoggingOut(false);
    }, 3000);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  const token1 = localStorage.getItem("token1");
  const token = localStorage.getItem("token");

  let barcolor, navcolor;
  if (theme.background === "#000000") {
    barcolor = "#fff";
    navcolor = "#000";
  } else {
    barcolor = "#000";
    navcolor = "#fff";
  }

  return (
    <motion.nav
      className="sticky top-0 z-10 px-4 py-2 flex items-center justify-between "
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        boxShadow: theme.boxShadow,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex items-center rounded-full border-2 border-red-500 p-2">
        <Link to="/" className="text-red-500">
          <BiDonateBlood
            size={50}
            className=" hidden sm:block"
            onClick={handleLogo}
          />
          <BiDonateBlood
            size={30}
            className="sm:hidden "
            onClick={handleLogo}
          />
        </Link>
      </div>
      <ul
        className=" font-mono text-xl sm:flex nav-menu"
        onClick={handleclick}
        style={{ backgroundColor: navcolor }}
      >
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
          <Link to="/" onClick={handleLogo}>
            Home
          </Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item">
          <Link to="/find-blood">Find Blood</Link>
        </li>
        {token && !token1 ? (
          <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item rounded ">
            <Link to="/register-donor">Register Donor</Link>
          </li>
        ) : null}

        {token && !token1 ? (
          <li className="ml-8 hover:text-red-400 transition-colors duration-300 nav-item rounded ">
            <Link to="/register-org">Register Organization</Link>
          </li>
        ) : null}
      </ul>
      {!token ? (
        <>
          <Link to="/login">
            <motion.button
              className="ml-10 px-4 py-2 rounded border-2 sm:flex border-black"
              style={{
                backgroundColor: theme.button.buttonBgColor,
                color: theme.button.buttonTextColor,
              }}
              whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
            >
              Log In
            </motion.button>
          </Link>
          <Link to="/SignUp">
            <motion.button
              className="px-4 py-2 rounded border-2 sm:flex border-black"
              style={{
                backgroundColor: theme.button.buttonBgColor,
                color: theme.button.buttonTextColor,
              }}
              whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
            >
              Sign Up
            </motion.button>
          </Link>
        </>
      ) : null}
      {token1 ? (
        <Link>
          <div className="user-profile relative max-w-full">
            <div className=" flex items-center rounded-full border-2 border-red-400 p-2 bg-gray-300">
              <img src={userProfile} className="w-12 h-12 object-cover" />
            </div>
            <div
              className="user-container top-10 p-2  md:left-5 absolute w-[180px] h-auto shadow-lg shadow-gray-300"
              style={{ backgroundColor: navcolor }}
            >
              <div
                className="w-full flex flex-col font-mono"
                style={{ backgroundColor: navcolor }}
              >
                <Link
                  to={"/userProfile"}
                  className="text-xl text-center p-2 hover:text-red-500  hover:duration-200"
                >
                  My Profile
                </Link>
                <Link
                  to={"/register-donor"}
                  className="text-xl text-center p-2 hover:text-red-500 hover:duration-200"
                >
                  My Dashboard
                </Link>
                <motion.button
                  className="px-4 mt-2  py-2 rounded border-2 justify-center sm:flex border-black"
                  style={{
                    backgroundColor: theme.button.buttonBgColor,
                    color: theme.button.buttonTextColor,
                  }}
                  whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
                  onClick={handleLogOut}
                >
                  Log out
                </motion.button>
              </div>
            </div>
          </div>
        </Link>
      ) : null}

      <motion.button
        onClick={toggleTheme}
        className="flex justify-center items-center text-3xl rounded-full"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {theme.icon}
      </motion.button>

      <div className="hamburger" onClick={handleclick}>
        <span className="bar" style={{ backgroundColor: barcolor }}></span>
        <span className="bar" style={{ backgroundColor: barcolor }}></span>
        <span className="bar" style={{ backgroundColor: barcolor }}></span>
      </div>

      {loggingOut && (
        <div className="flex items-center ml-4">
          <TailSpin color={theme.button.buttonBgColor} height={30} width={30} />
          <span className="ml-2">Logging out...</span>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
