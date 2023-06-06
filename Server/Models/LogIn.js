const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema({
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

const UserLogin = mongoose.model("UserLogin", userLoginSchema);

module.exports = UserLogin;
