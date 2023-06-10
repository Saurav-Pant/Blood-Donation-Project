const express = require("express");
const app = express();
const mongoose = require("mongoose");

//MongoDB
mongoose
  .connect("mongodb://127.0.0.1/Blood-Donation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
