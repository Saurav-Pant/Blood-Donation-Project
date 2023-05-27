import React from "react";
import { Link } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around px-4 py-2">
      <div className="flex items-center">
        <Link to="/" className="text-black">
          <BiDonateBlood size={50} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex">
          <li className="ml-8">
            <Link to="/" className="text-black">
              Home
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/about" className="text-black">
              About Us
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/find-blood" className="text-black">
              Find Blood
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/signup" className="text-black">
             <option value="">
              Register As Donor
             </option>
             <option value="">
              Register As Recipient
             </option>
            </Link>
          </li>
        </ul>
        <button className="ml-10 px-4 py-2 rounded border-2 border-black">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
