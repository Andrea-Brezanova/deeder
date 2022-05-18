const userModel = require("../models/User");

const login = (req, res, next) => {
  //res.json()
  res.send("login");
};
const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
  
    const user = await userModel.create({ email, password });
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
