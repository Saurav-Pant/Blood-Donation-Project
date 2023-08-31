// MONGO DB
const mongoose = require("mongoose");

exports.connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
