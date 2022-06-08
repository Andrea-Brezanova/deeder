const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Log into exisitng account

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
      { id: found._id, email: found.email, userName: found.userName },
      process.env.JWT_SECRET,
      {
        expiresIn: "480m",
      }
    );
    res.json(accessToken);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create a new account
//Check DB for exisiting user
const signup = async (req, res, next) => {
  try {
    const {
      body: { userName, email, password, phoneNumber, location},
    } = req;

    const found = await userModel.findOne({ email });
    if (found) throw new Error("User Already Exist");

    //Hash Password
    const hash = await bcrypt.hash(password, 6);

    //Create a new user if user doesn't exist
    const user = await userModel.create({ userName, email, password: hash, phoneNumber, location });

    //Create Jason Web Token (JWT)
    const token = jwt.sign(
      //Payload
      { id: user._id, email },
      //Secret
      process.env.JWT_SECRET,
      {
        expiresIn: "500m",
      }
    );

    res.json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

//Display all users
const getUsers = async (req, res, next) => {
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one user
const getUser = async (req, res, next) => {
 
  try {
    const {
      params: { id },
    } = req;
    const user = await userModel.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Modify existing user
const updateUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const {
      body: { userName, location, email, password, phoneNumber, picture },
    } = req;
    const user = await postModel.findByIdAndUpdate(id, {
      userName,
      location,
      email,
      password,
      phoneNumber,
      picture
    });
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Remove existing user
const deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await userModel.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  login,
  signup,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
