import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import AboutUs from "./pages/aboutUs";
import FindBlood from "./pages/findBlood";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeContext } from "./context/ThemeContext";
import RegisterOrg from "./pages/registerOrg";
import RegisterDonor from "./pages/registerDonor";
import SignUp from "./pages/SignUp";

const App = () => {
  const { theme } = useContext(ThemeContext);
  // Get the current location
  const location = useLocation();
  console.log(location);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {location.pathname !== "/SignUp" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login " element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/find-blood" element={<FindBlood />} />
        <Route path="/register-org" element={<RegisterOrg />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
      </Routes>

      {location.pathname !== "/SignUp" && <Footer />}
    </div>
  );
};

export default App;
