import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import Loading from "../components/Loading";
import { useAuth0 } from "@auth0/auth0-react";

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

  const [loggingOut, setLoggingOut] = useState(false); // State to track logout loading

  const handleLogOut = () => {
    setLoggingOut(true); // Start loading

    setTimeout(() => {
       logout({ logoutParams: { returnTo: window.location.origin } })
      localStorage.removeItem("token1");
      localStorage.removeItem("token");
      navigate("/login");
      setLoggingOut(false); // End loading after 3000ms
    }, 3000);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  const token1 = localStorage.getItem("token1");

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
          <BiDonateBlood size={30} className="sm:hidden " onClick={handleLogo} />
        </Link>
      </div>
      {/* Hide links in small devices */}
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
        {token1 ? null : (
          <li className="ml-8 hover:text-red-900 transition-colors duration-300 nav-item rounded text-red-500">
            <Link to="/register-donor">Register Donor</Link>
          </li>
        )}

        {token1 ? null : (
          <li className="ml-8 hover:text-red-900 transition-colors duration-300 nav-item rounded text-red-500">
            <Link to="/register-org">Register Organization</Link>
          </li>
        )}
      </ul>

      {!token1 ? (
        <Link to="/SignUp">
          <motion.button
            className="ml-10 px-4 py-2 rounded border-2 sm:flex border-black"
            style={{
              backgroundColor: theme.button.buttonBgColor,
              color: theme.button.buttonTextColor,
            }}
            whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
          >
            Sign Up
          </motion.button>
        </Link>
      ) : (
        <motion.button
          className="ml-10 px-4 py-2 rounded border-2 sm:flex border-black"
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
          whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
          onClick={handleLogOut}
        >
          Logout
        </motion.button>
      )}

      {token1 ? (
        <Link to="/dashboard">
          <FaUserCircle size={40} />
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

      {loggingOut && <Loading/>} 
    </motion.nav>
  );
};

export default Navbar;
