const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const allProductsData = await Product.find({});
    res.send(allProductsData)
  } catch (error) {
    res.send(error)
    console.log(error);
  }
});

module.exports = router;
