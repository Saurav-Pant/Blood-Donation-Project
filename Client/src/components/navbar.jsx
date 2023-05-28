import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const {theme,toggleTheme}=useContext(ThemeContext)
  const buttonColor=theme.button.buttonBgColor
  const buttonTextColor=theme.button.buttonTextColor
  return (
    <div className="flex items-center justify-around px-4 py-2">
      <div className="flex items-center rounded-full bg-black">
        <Link to="/" className="text-white">
          <BiDonateBlood size={50} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex">
          <li className="ml-8">
            <Link to="/" >
              Home
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/about" >
              About Us
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/find-blood" >
              Find Blood
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/signup" >
              Register Now
            </Link>
          </li>
        </ul>
        <button className="ml-10 px-4 py-2 rounded border-2  border-black" style={

          {
              backgroundColor:theme.button.buttonBgColor,
              color:theme.button.buttonTextColor
              
          }
        }>Log In</button>
      </div>
      <div>
        <button onClick={toggleTheme}>{theme.icon}</button>

      </div>
    </div>
  );
};

export default Navbar;
