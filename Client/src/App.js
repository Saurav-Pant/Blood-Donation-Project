import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import AboutUs from "./pages/aboutUs";
import FindBlood from "./pages/findblood";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeContext } from "./context/ThemeContext";

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
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/find-blood" element={<FindBlood />} />
      </Routes>

      {location.pathname !== "/login" && <Footer />}
    </div>
  );
};

export default App;
