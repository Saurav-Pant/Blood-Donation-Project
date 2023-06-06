require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const SignUpRoute = require("./Routes/SignUp");
const LogInRoute = require("./Routes/LogIn");
const cors = require("cors");

// MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(express.json());

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/signup", SignUpRoute);
app.use("/login", LogInRoute);

// Server Listener
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
