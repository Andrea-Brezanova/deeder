const userModel = require("../models/User");

const login = (req, res, next) => {
  res.send("login");
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
  
    //Check DB for exisiting user  
    const user = await userModel.create({ email, password });
    res.json(user);
    
  } catch (error) {
    console.log(error.message)
      res.status(500).json({message:error.message});
  }
  
};

module.exports = {
  login,
  signup,
};
