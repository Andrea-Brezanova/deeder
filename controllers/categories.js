const categoryModel = require("../models/Category");

const getCategories = (req, res, next) => {
  res.send("all categories");
};

const getCategory = (req, res, next) => {
  res.send("one category");
};

const createCategory = (req, res, next) => {
  res.send("create category");
};

const updateCategory = (req, res, next) => {
  res.send("update category");
};

const deleteCategory = (req, res, next) => {
  res.send("delete category");
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
