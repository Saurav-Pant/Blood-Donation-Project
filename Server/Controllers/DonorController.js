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

      const token = jwt.sign({ _id: donor._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      console.log(token);
      console.log(res.cookie());

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

  getDonorById: async (req, res) => {
    try {
      const token = req.cookies.token;

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const donorId = decodedToken._id;

      const donor = await Donor.findById(donorId);
      if (!donor) {
        return res.status(404).json({ error: "Donor not found" });
      }
      res.status(200).json(donor);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = DonorController;
