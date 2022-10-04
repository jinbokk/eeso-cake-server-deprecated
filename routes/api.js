const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    let allProductData = await Product.find({});

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
    return res.json(results);
  } catch (error) {
    res.send(error);
  }
});

router.get("/rice", async (req, res) => {
  try {
    const riceProductsData = await Product.find({
      ingredient: "rice",
    });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const startPage = (page - 1) * limit;
    const endPage = page * limit;

    const results = {};

    if (endPage < riceProductsData.length) {
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
    results.results = riceProductsData.slice(startPage, endPage);
    results.page = page;
    results.totalDocs = riceProductsData.length;
    return res.json(results);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/bread", async (req, res) => {
  try {
    const breadProductsData = await Product.find({
      ingredient: "bread",
    });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const startPage = (page - 1) * limit;
    const endPage = page * limit;

    const results = {};

    if (endPage < breadProductsData.length) {
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
    results.results = breadProductsData.slice(startPage, endPage);
    results.page = page;
    results.totalDocs = breadProductsData.length;
    return res.json(results);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/tart", async (req, res) => {
  try {
    const tartProductsData = await Product.find({
      ingredient: "tart",
    });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const startPage = (page - 1) * limit;
    const endPage = page * limit;

    const results = {};

    if (endPage < tartProductsData.length) {
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
    results.results = tartProductsData.slice(startPage, endPage);
    results.page = page;
    results.totalDocs = tartProductsData.length;
    return res.json(results);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
