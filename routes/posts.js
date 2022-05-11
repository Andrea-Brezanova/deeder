const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.route("/").get(getPosts).post(createPost);

postsRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = postsRouter;
