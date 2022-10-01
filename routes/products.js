const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// All Products Route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name !== null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i"); // "ca" can find "cake" and "CAke" ... etc
  }
  try {
    const products = await Product.find(searchOptions); // just use find method this time in mongoose (find all)
    res.render("products/index", {
      products: products,
      searchOptions: req.query,
    });
  } catch (error) {
    res.redirect("/");
  }
});

// New Products Route
router.get("/new", (req, res) => {
  res.render("products/new", { product: new Product() });
});

// Create Product Route
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    // ingredient: "test",
    // layer: 1,
    // design: ["test"],
    // description: "test",
    // image_path: "test",
  });

  try {
    const newProduct = await new Product();
    // res.redirect(`products/${newProduct.id}`);
    res.redirect("products");
  } catch (error) {
    console.log(error);
    res.render("products/new", {
      product: product,
      errorMessage: "Error creating Product",
    });
  }
});

module.exports = router;
