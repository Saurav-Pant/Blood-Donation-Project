const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// Proxy middleware
app.use(
  "/api/users",
  createProxyMiddleware({
    target: "https://blood-donation-project-c4ij.vercel.app",
    changeOrigin: true,
  })
);

// Routes
app.use("/api/users", require("./Routes/SignUp"));
app.use("/api/users", require("./Routes/Login"));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});

// MongoDB
mongoose
  .connect("mongodb://127.0.0.1/Blood-Donation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
