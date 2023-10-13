const User = require("../Models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "All Credentials Must be Filled!!" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    // Creating a token for the client
    const token = createToken(user._id);

    // Set the token as a cookie
    res.cookie("token", token, { maxAge: 3600000 });
    console.log(token);

    // Send the token and email as a JSON response
    res.status(200).json({
      token,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = LoginUser;
