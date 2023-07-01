require("dotenv").config({
  path: ".env",
});
const express = require("express");
const app = express();
const cors = require("cors");
const { connectToDB } = require("./Data/db");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./Routes/SignUp"));
app.use("/api/users", require("./Routes/Login"));
app.use("/api", require("./Routes/donorRoutes"));

//For Database Connection
connectToDB();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
