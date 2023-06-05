const express = require("express");
const router = express.Router();

// Import the User model
const User = require("../models/SignUp");

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch {
    res.status(500).json({ error: "Failed to save user." });
  }
});
