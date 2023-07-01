require("dotenv").config({
  path: ".env",
});

const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./Routes/SignUp"));
app.use("/api/users", require("./Routes/Login"));
app.use("/api", require("./Routes/donorRoutes"));

module.exports = {
  app,
};
