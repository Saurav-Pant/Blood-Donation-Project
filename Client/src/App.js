import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import AboutUs from "./pages/aboutUs";
import FindBlood from "./pages/findBlood";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup"  element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/find-blood" element={<FindBlood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
