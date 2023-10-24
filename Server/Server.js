require("dotenv").config({
  path: "config.env",
});

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middleware
app.use(express.json());

// For Preventing CORS error
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.use("/api/users", require("./Routes/SignUp.js"));
app.use("/api/users", require("./Routes/Login.js"));
app.use("/api", require("./Routes/donorRoutes.js"));

module.exports = {
  app,
};
