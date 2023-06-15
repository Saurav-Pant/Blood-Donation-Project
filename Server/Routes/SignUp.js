const express = require("express");
const router = express.Router();
const SignUpUser = require("../Controllers/SignUpController");

router.post("/signup", SignUpUser);

module.exports = router;
