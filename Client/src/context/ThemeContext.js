import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeContext = createContext("light");

const lightTheme = {
  mode: "light",
  background: "#ECF2FF",
  color: "#000",
  icon: <FontAwesomeIcon icon={faSun} />,
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  button: {
    buttonBgColor: "#000",
    buttonTextColor: "#fff",
  },
};
const darkTheme = {
  mode: "dark",
  background: "#191A19",
  color: "#FFFFFF",
  icon: <FontAwesomeIcon icon={faMoon} />,
  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
  button: {
    buttonBgColor: "#fff",
    buttonTextColor: "#000",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    const newTheme =
      JSON.stringify(theme) === JSON.stringify(lightTheme)
        ? darkTheme
        : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", JSON.stringify(newTheme));
  };

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
