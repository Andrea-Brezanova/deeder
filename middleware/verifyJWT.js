const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  if (req.headers.authorization) {
    const {
      headers: { authorization },
    } = req;

    const token = authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(403).send(error.message);
    }
  } else {
    res.status(403).send("Please Login First");
  }
};

module.exports = verifyJWT;
