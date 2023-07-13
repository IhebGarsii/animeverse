const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const user = require("./models/user");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userr = await user.login(email, password);

    const token = createToken(userr._id);
    res.status(201).json(email, token);
  } catch (err) {
    return res.status(404).json({ err: "not found login" });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userr = user.signup(email, password);
    const token = createToken(userr._id);
    res.status(201).json({ email, password });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
