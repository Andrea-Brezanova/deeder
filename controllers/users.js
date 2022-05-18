const userModel = require("../models/User");

const login = (req, res, next) => {
  
  res.send("login");
};
const signup = async (req, res, next) => {
  try {
    const {
      body: { userName, email, password },
    } = req;
  
    //Check DB for exisiting user  
    const user = await userModel.create({ userName, email, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message)
  }
};

module.exports = {
  login,
  signup,
};
