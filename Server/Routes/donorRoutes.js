const express = require("express");
const router = express.Router();
const DonorController = require("../Controllers/DonorController");

router.post("/donors", DonorController);
router.get("/donors", DonorController);

module.exports = router;
