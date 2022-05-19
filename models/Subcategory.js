const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Subcategory = require("../models/Subcategory");

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref:"Category"
  },
});

const subcategoryModel = mongoose.model("Subcategory", subcategorySchema);
module.exports = subcategoryModel;
