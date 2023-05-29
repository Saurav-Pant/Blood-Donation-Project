import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import AboutUs from "./pages/aboutUs";
import FindBlood from "./pages/findblood";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const currentPath = window.location.pathname; // Get the current route path

  // Check if the current route is not "/login"
  const shouldDisplayNavbarAndFooter = currentPath !== "/login";

  return (
    <Router>
      <div
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        {/* Conditionally render Navbar */}
        {shouldDisplayNavbarAndFooter && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Register />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/find-blood" element={<FindBlood />} />
          {/* <Route path="/Register-Doner" element={<RegisterDoner />} /> */}
        </Routes>

        {/* Conditionally render Footer */}
        {shouldDisplayNavbarAndFooter && <Footer />}
      </div>
    </Router>
  );
};

export default App;
