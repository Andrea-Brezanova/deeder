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

postsRouter.use(verifyJWT);
postsRouter.route("/").get(verifyJWT, getPosts).post(createPost);

postsRouter
.route("/:id")
.get(getPost)
.put(updatePost)
.delete(deletePost);

module.exports = postsRouter;
