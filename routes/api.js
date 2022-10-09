const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { param } = require("./products");

router.get("/", async (req, res) => {
  try {
    let allProductData = await Product.find({}).sort({ name: -1 });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const startPage = (page - 1) * limit;
    const endPage = page * limit;

    const results = {};

    if (endPage < allProductData.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startPage > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = allProductData.slice(startPage, endPage);
    results.page = page;
    results.totalDocs = allProductData.length;
    return res.status(200).json(results);
  } catch (error) {
    res.status(400).send(error);
  }
});

// api test----------------------------------------------------------------

// router.get("/:ingredient/:design", async (req, res) => {
router.get("/:ingredient", async (req, res) => {
  let ingredient = req.params.ingredient;
  let design = req.query.design;

  try {
    let ProductsData;

    ProductsData = await Product.find({
      ingredient: ingredient,
    }).sort({ name: -1 });

    if (design) {
      ProductsData = await Product.find({
        ingredient: ingredient,
        design: design,
      }).sort({ name: -1 });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const startPage = (page - 1) * limit;
    const endPage = page * limit;

    const results = {};

    if (endPage < ProductsData.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startPage > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = ProductsData.slice(startPage, endPage);
    results.page = page;
    results.totalDocs = ProductsData.length;
    return res.status(200).json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// api test----------------------------------------------------------------

// router.get("/rice", async (req, res) => {
//   try {
//     const riceProductsData = await Product.find({
//       ingredient: "rice",
//     }).sort({ name: -1 });

//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 20;

//     const startPage = (page - 1) * limit;
//     const endPage = page * limit;

//     const results = {};

//     if (endPage < riceProductsData.length) {
//       results.next = {
//         page: page + 1,
//         limit: limit,
//       };
//     }

//     if (startPage > 0) {
//       results.previous = {
//         page: page - 1,
//         limit: limit,
//       };
//     }
//     results.results = riceProductsData.slice(startPage, endPage);
//     results.page = page;
//     results.totalDocs = riceProductsData.length;
//     return res.status(200).json(results);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });

// router.get("/bread", async (req, res) => {
//   try {
//     const breadProductsData = await Product.find({
//       ingredient: "bread",
//     }).sort({ name: -1 });

//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 20;

//     const startPage = (page - 1) * limit;
//     const endPage = page * limit;

//     const results = {};

//     if (endPage < breadProductsData.length) {
//       results.next = {
//         page: page + 1,
//         limit: limit,
//       };
//     }

//     if (startPage > 0) {
//       results.previous = {
//         page: page - 1,
//         limit: limit,
//       };
//     }
//     results.results = breadProductsData.slice(startPage, endPage);
//     results.page = page;
//     results.totalDocs = breadProductsData.length;
//     return res.status(200).json(results);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });

// router.get("/tart", async (req, res) => {
//   try {
//     const tartProductsData = await Product.find({
//       ingredient: "tart",
//     }).sort({ name: -1 });

//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 20;

//     const startPage = (page - 1) * limit;
//     const endPage = page * limit;

//     const results = {};

//     if (endPage < tartProductsData.length) {
//       results.next = {
//         page: page + 1,
//         limit: limit,
//       };
//     }

//     if (startPage > 0) {
//       results.previous = {
//         page: page - 1,
//         limit: limit,
//       };
//     }
//     results.results = tartProductsData.slice(startPage, endPage);
//     results.page = page;
//     results.totalDocs = tartProductsData.length;
//     return res.status(200).json(results);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });

module.exports = router;
