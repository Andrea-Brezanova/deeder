const userModel = require("../models/User");


//Log into existing account
const login = (req, res, next) => {
  
  res.send("login");
};

//Create a new account
const signup = async (req, res, next) => {
  try {
    const {
      body: { userName, email, password },
    } = req;
  
    //Check DB for exisiting user 
    const found = await userModel.findOne({email});

    console.log(found)
    if (found) throw new Error("User Already Exist");

    //Create new user 
    const user = await userModel.create({ userName, email, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message)
  }
};

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