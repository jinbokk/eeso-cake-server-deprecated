const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true},
  ingredient: { type: String },
  layer: { type: Number },
  design: [{ type: String }],
  description: { type: String },
  image_path: { type: String },
  // name: { type: String, required: true },
  // ingredient: { type: String, required: true },
  // layer: { type: Number, required: true },
  // design: [{ type: String, required: true }],
  // description: { type: String },
  // image_path: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
