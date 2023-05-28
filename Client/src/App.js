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
// import RegisterDoner from "./pages/RegisterDoner";

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
          {/* <Route path="/Register-Doner" element={<RegisterDoner />} /> */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
