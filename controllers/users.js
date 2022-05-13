const userModel = require("../models/User");

const login = (req, res, next) => {
    res.send("login");
  };
  
  const signup = (req, res, next) => {
    res.send("signup");
  };
  
  module.exports = {
    login,
    signup
  };
  