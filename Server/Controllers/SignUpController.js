const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const SignUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "All Fields are required",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      msg: "Invalid Email",
    });
  }

  if (validator.isStrongPassword(password)) {
    return res.status(400).json({
      msg: "Password is not strong enough",
    });
  }

  try {
    // Checking for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // For Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // For Saving the user into the DB
    const savedUser = await newUser.save();

    res.json({
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
        password: savedUser.password,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = SignUpUser;
