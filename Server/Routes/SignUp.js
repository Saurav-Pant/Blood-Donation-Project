const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/SignUp");

// Creating  a new user
router.post("/",
[
  check("name", "Please Enter a Valid Name").not().isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter a valid password").isLength({
    min: 6,
  }),
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
)


module.exports = router;
