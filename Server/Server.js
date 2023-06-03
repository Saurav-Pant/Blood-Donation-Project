require("dotenv").config();
const express = require("express");
const app = express();
const MONGO_URI = process.env.MONGO_URI;

// MongoDB
const mongoose = require("mongoose");

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

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
