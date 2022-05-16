const express = require("express");
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.route("/").get(getCategories).post(createCategory);

categoriesRouter
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = categoriesRouter;
