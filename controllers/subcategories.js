const subcategoryModel = require("../models/Subcategory");

const getSubcategories = (req, res, next) => {
  res.send("all subcategories");
};

const getSubcategory = (req, res, next) => {
  res.send("one subcategory");
};

const createSubcategory = (req, res, next) => {
  res.send("create subcategory");
};

const updateSubcategory = (req, res, next) => {
  res.send("update subcategory");
};

const deleteSubcategory = (req, res, next) => {
  res.send("delete subcategory");
};

module.exports = {
  getSubcategories,
  getSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
};
