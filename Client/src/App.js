import React, { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import Dashboard from "./components/Dashboard";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const token = localStorage.getItem("token");
  const token1 = localStorage.getItem("token1");
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
        {token ? (
          <Route
            path="/login"
            element={<Navigate to="/dashboard" replace={true} />}
          />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {token ? (
          <Route
            path="/SignUp"
            element={<Navigate to="/dashboard" replace={true} />}
          />
        ) : (
          <Route path="/SignUp" element={<SignUp />} />
        )}
        <Route path="/about" element={<AboutUs />} />
        {token1 ? (
          <Route path="/find-blood" element={<FindBlood />} />
        ) : (
          <Route
            path="/find-blood"
            element={<Navigate to="/login" replace={true} />}
          />
        )}
        <Route path="/find-blood" element={<FindBlood />} />
        <Route path="/register-org" element={<RegisterOrg />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
        <Route path="*" element={<PageNotFound />} />
        {token1 && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>

      {location.pathname !== "/SignUp" && location.pathname !== "/login" && (
        <Footer />
      )}
    </div>
  );
};

export default App;
