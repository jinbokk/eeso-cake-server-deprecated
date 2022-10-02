const mongoose = require("mongoose");

const productImageBasePath = "uploads/productImages";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredient: { type: String },
  layer: { type: Number },
  design: [{ type: String }],
  description: { type: String },
  image_url: { type: String },
  // name: { type: String, required: true },
  // ingredient: { type: String, required: true },
  // layer: { type: Number, required: true },
  // design: [{ type: String, required: true }],
  // description: { type: String },
  // image: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
module.exports.productImageBasePath = productImageBasePath;
