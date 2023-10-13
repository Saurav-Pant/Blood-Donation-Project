const express = require("express");
const router = express.Router();
const SignUpUser = require("../Controllers/SignUpController.js");

router.post("/signup", SignUpUser);

module.exports = router;
