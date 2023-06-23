const Donor = require("../models/Donor");
const jwt = require("jsonwebtoken");

const DonorController = {
  register: async (req, res) => {
    try {
      const { email } = req.body;

      const existingDonor = await Donor.findOne({ email });
      if (existingDonor) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const donor = new Donor(req.body);
      await donor.save();

      // Generate token
      const token = jwt.sign({ email: donor.email }, process.env.JWT_SECRET, {
        expiresIn: "1h", // Set the expiration time for the token
      });

      res.status(201).json({ message: "Donor registered successfully", token });
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
