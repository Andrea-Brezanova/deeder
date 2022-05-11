const getPosts = (req, res, next) => {
  res.send("all posts");
};

const getPost = (req, res, next) => {
  res.send("one post");
};

const createPost = (req, res, next) => {
  res.send("create post");
};

const updatePost = (req, res, next) => {
  res.send("update post");
};

const deletePost = (req, res, next) => {
  res.send("delete post");
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
