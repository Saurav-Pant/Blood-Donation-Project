import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext("light");

const lightTheme = {
  mode: "light",
  background: "#fff",
  color: "#000",
  icon: "☀️",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  button: {
    buttonBgColor: "#000",
    buttonTextColor: "#fff",
  },
};
const darkTheme = {
  mode: "dark",
  background: "#000000",
  color: "#FFFFFF",
  icon: "🌜",
  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
  button: {
    buttonBgColor: "#fff",
    buttonTextColor: "#000",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    const newTheme = JSON.stringify(theme) === JSON.stringify(lightTheme) ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", JSON.stringify(newTheme));
  };

  // Retrieve theme from local storage, if available
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("selectedTheme"));
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
