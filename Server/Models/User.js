const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
});

const User = mongoose.model("USER", UserSchema);
module.exports = User;
