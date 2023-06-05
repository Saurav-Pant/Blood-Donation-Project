const express = require("express");
const router = express.Router();
const User = require("../models/LogIn");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Failed to log in." });
  }
});

module.exports = router;
