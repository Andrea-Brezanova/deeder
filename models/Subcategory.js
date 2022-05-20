const { Schema, model, Types } = require("mongoose");

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  
  category: {
    type: Types.ObjectId,
    required: true,
    ref:"Category"
  },
});

const subcategoryModel = model("Subcategory", subcategorySchema);
module.exports = subcategoryModel;
