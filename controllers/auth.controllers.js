const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
    });
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      throw new Error("Please provide username or email and password");
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid credentials");
    }
    const passwordCheck = await user.comparePassword(password);

    if (!passwordCheck) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    res.status(200).json({ user, message: "Login successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  login,
};
