const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/posts");

const postsRouter = express.Router();


postsRouter.route("/").get(getPosts).post(verifyJWT, createPost);

postsRouter
.route("/:id")
.get(getPost)
.put(verifyJWT, updatePost)
.delete(verifyJWT, deletePost);

module.exports = postsRouter;
