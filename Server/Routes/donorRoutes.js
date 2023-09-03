const express = require("express");
const router = express.Router();
const DonorController = require("../Controllers/DonorController");

router.post("/donors", DonorController.register);
router.get("/donors", DonorController.SpecificUser);
router.get("/donors/all", DonorController.getAllUsers);

module.exports = router;
