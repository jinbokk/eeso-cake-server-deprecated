const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema({
  name: { type: String, required: true, trim: true },
  ingredient: { type: String, required: true },
  layer: { type: Number, required: true },
  design: [{ type: String, required: true }],
  description: { type: String },
  image_path: { type: String, required: true },
});

module.exports = mongoose.model("Product", Product);
