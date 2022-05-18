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

    //If both match, create access token
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
      body: { userName, email, password },
    } = req;

    const found = await userModel.findOne({ email });
    if (found) throw new Error("User Already Exist");

    //Hash Password
    const hash = await bcrypt.hash(password, 6);

    //Create a new user if user doesn't exist
    const user = await userModel.create({ userName, email, password: hash });

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
}
