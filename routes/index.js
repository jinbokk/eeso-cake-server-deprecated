const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
}); // have to change when deploy

module.exports = router;
