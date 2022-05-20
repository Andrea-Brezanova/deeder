const express = require("express");
const { login, signup, getUser, getUsers } = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/login", login);

usersRouter.post("/signup", signup);

usersRouter.get("/all", getUsers);

usersRouter
.route("/:id")
.get(getUser)
.put(getUser)
.delete(getUser);

module.exports = usersRouter;
