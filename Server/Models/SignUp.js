const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: "string",
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
