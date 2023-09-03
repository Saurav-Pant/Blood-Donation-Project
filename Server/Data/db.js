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

// JWT_SECRET="Saurav012"
// LOCAL_MONGO_URI="mongodb://127.0.0.1/Blood-Donation"
// PORT=8080
// MONGO_URI="mongodb+srv://pantsaurav005:saurav@cluster0.n95tvws.mongodb.net/"
