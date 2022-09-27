const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('index');
}); // have to change when deploy

module.exports = router;
