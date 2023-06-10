const express = require("express");
const router = express.Router();

//User Model
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

// User Model
const User = require("../Models/User");

// Login Route
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide an email and password" });
  }

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Successful login
    // You can set up a session or generate a token here to maintain user authentication

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
