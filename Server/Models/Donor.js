//Blood Donor Details

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonorSchema = new Schema({
  FirstName: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },
  LastName: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },
  PhoneNumber: {
    type: String,
    require: true,
    trim: true,
    minlength: 10,
  },

  Email: {
    type: String,
    require: true,
  },

  BloodGroup: {
    type: String,
    require: true,
    trim: true,
    minlength: 2,
  },

  age: {
    type: Number,
    require: true,
    trim: true,
  },

  Address: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },

  state: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },
  city: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },
  Gender: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
  },
  AllDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = Donor = mongoose.model("DONOR", DonorSchema);
