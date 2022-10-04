const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const allProductsData = await Product.find({});
    res.send(allProductsData.json());
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/rice", async (req, res) => {
  try {
    const riceProductsData = await Product.find({
      ingredient: "rice",
    });
    res.send(riceProductsData.json());
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/bread", async (req, res) => {
  try {
    const breadProductsData = await Product.find({
      ingredient: "bread",
    });
    res.send(breadProductsData.json());
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/tart", async (req, res) => {
  try {
    const tartProductsData = await Product.find({
      ingredient: "tart",
    });
    res.send(tartProductsData.json());
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

module.exports = router;
