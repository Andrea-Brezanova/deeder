const express = require("express");
const {
  getSubcategories,
  getSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} = require("../controllers/subcategories");

const subcategoriesRouter = express.Router();

// subcategoriesRouter.route("/").get(getSubcategories).post(createSubcategory);

// subcategoriesRouter
//   .route("/:id")
//   .get(getSubcategory)
//   .put(updateSubcategory)
//   .delete(deleteSubcategory);

module.exports = subcategoriesRouter;