const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



//Create a new account
const signup = async (req, res, next) => {

const login = async (req, res, next) => {

  try {
    const {
      body: { userName, email, password },
    } = req;
    //KWCheck DB for exisiting user 
    const found = await userModel.findOne({ email });
    if (found) throw new Error("User Already Exist");

    const hash = await bcrypt.hash(password, 6);

    const user = await userModel.create({ userName, email, password: hash });

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: "500s"
    });
    res.json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });

//C: CRUD operations:


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
