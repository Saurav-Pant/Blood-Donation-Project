require("dotenv").config({
  path: "config.env",
});

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/users", require("./Routes/SignUp"));
app.use("/api/users", require("./Routes/Login"));
app.use("/api", require("./Routes/donorRoutes"));

module.exports = {
  app,
};
