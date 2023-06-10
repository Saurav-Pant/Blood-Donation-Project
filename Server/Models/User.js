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
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
});

module.exports = User = mongoose.model("USER", UserSchema);
