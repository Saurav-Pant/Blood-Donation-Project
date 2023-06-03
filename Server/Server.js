const express = require("express");

const app = express();

//MongoDB

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
