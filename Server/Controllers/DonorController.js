const Donor = require("../models/Donor");

const DonorController = {
  register: async (req, res) => {
    try {
      const donor = new Donor(req.body);
      await donor.save();
      res.status(201).json({ message: "Donor registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllDonors: async (req, res) => {
    try {
      const donors = await Donor.find();
      res.status(200).json(donors);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = DonorController;
