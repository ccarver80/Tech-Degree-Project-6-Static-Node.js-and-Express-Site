const express = require("express");
const router = express.Router();
const data = require('../data/projects.json'); 

//renders basic index home page
router.get("/", (req, res) => {
  res.render("index", {data});
});

module.exports = router;
