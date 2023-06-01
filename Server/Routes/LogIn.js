const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model

router.post("/", async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Create a new user with the phone number
    const newUser = new User({
      phoneNumber,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser); // Respond with the newly created user
  } catch (error) {
    res.status(500).json({ error: "Failed to save user." });
  }
});

module.exports = router;
