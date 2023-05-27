import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import FindBlood from "./pages/FindBlood";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
      <div
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Register />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/find-blood" element={<FindBlood />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
