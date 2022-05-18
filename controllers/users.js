const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  //res.json()
  res.send("login");
};
const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    //Check DB for an exisiting user
    const found = await userModel.findOne({ email });
    if (found) throw new Error("this user  Exists");

    const hash = await bcrypt.hash(password, 6);

    const user = await userModel.create({ email, password: hash });

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: "180s",
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    //console.log(error.message)
  }
};

module.exports = {
  login,
  signup,
};
