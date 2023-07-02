const express = require("express");
const router = express.Router();
const DonorController = require("../Controllers/DonorController");

router.post("/donors", DonorController.register);
router.get("/donors", DonorController.getAllDonors);
router.get("/donors/:id", DonorController.getDonorById);

module.exports = router;
