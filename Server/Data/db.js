const mongoose = require("mongoose");

exports.connectToDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1/Blood-Donation", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
