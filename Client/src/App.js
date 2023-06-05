import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import FindBlood from "./pages/findBlood";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeContext } from "./context/ThemeContext";
import RegisterOrg from "./pages/registerOrg";
import RegisterDonor from "./pages/registerDonor";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  console.log(location);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {location.pathname !== "/SignUp" && location.pathname !== "/login" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/find-blood" element={<FindBlood />} />
        <Route path="/register-org" element={<RegisterOrg />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {location.pathname !== "/SignUp" && location.pathname !== "/login" && (
        <Footer />
      )}
    </div>
  );
};

export default App;
