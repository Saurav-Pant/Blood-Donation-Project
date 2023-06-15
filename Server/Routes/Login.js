const express = require("express");
const router = express.Router();

const LoginUser = require("../Controllers/LoginController");

router.post("/login", LoginUser);

module.exports = router;
