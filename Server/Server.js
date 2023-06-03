const express = require("express");
const app = express();

// MongoDB
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
