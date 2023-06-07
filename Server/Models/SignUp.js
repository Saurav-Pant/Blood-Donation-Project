const mongoose = require("mongoose");

const UserSignUpSchema = new mongoose.Schema({
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

const UserSignUp = mongoose.model("UserSignUp", UserSignUpSchema);

module.exports = UserSignUp;
