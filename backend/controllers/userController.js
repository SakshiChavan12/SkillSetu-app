const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ msg: "User exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.json(user);
};

// LOGIN
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      token: jwt.sign({ id: user._id }, "secret", { expiresIn: "1d" })
    });
  } else {
    res.status(401).json({ msg: "Invalid credentials" });
  }
};

//update profile
exports.updateProfile = async (req, res) => {
  try {
    const { skillsTeach, skillsLearn } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id, // comes from auth middleware (later)
      {
        skillsTeach,
        skillsLearn
      },
      { new: true }
    );

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
