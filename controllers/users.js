const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//A:Log into existing account
const login = async (req, res, next) => {
  try {
    const {
      body: { userName, email, password },
    } = req;

    //Check DB for email (see if user exists)
    const found = await userModel.findOne({ email }).select("+password");
    if (!found)
      throw new Error(
        "The email you entered does not correspond to any account, try again please"
      );

    //Compare hashes (see if password matches the email it is associated with)
    const match = await bcrypt.compare(password, found.password);
    if (!match)
      throw new Error("The password you provided does not match your email");

    //Create access token
    const accessToken = jwt.sign(
      { id: found._id, email: found.email, userName, userName: found.userName },
      process.env.JWT_SECRET,
      {
        expiresIn: "480m",
      }
    );
    res.json(accessToken);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

//B:Sign up for a new account
const signup = async (req, res, next) => {
  try {
    const {
      body: { userName, email, password },
    } = req;

    //Check DB for exisiting user
    const found = await userModel.findOne({ email });
    if (found) throw new Error("User Already Exist");

    //Store hash in your password DB
    const hash = await bcrypt.hash(password, 5);

    //Create new user
    const user = await userModel.create({ userName, email, password: hash });

    //Create access token
    const accessToken = jwt.sign(
      { id: user._id, email, userName },
      process.env.JWT_SECRET,
      {
        expiresIn: "120s",
      }
    );
    res.json(accessToken);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

//C: CRUD operations:
//Get all users
const getUsers = (req, res, next) => {
  res.send("all users");
};

//Get one user
const getUser = (req, res, next) => {
  res.send("one user");
};

//Create a new user
const createUser = (req, res, next) => {
  res.send("create user");
};

//Modify existing user
const updateUser = (req, res, next) => {
  res.send("update user");
};

//Delete existing user
const deleteUser = (req, res, next) => {
  res.send("delete user");
};
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  signup,
};
