// require("dotenv").config();
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const MONGO_URI = process.env.MONGO_URI;
// const SignUpRoute = require("./Routes/SignUp");
// const LogInRoute = require("./Routes/LogIn");
// const cors = require("cors");
// const session = require("express-session");

// // MongoDB
// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Middleware
// app.use(express.json());
// app.use(
//   session({
//     secret: "sauravpant123",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// //cors
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

// // Routes
// app.use("/signup", SignUpRoute);
// app.use("/login", LogInRoute);

// // Server Listener
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

const express = require("express");
const app = express();

const PORT = 8080;

app.use("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
