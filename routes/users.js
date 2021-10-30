var express = require("express");
const dummy = require("../utils/dummy");
var router = express.Router();

/* GET users listing. */
router.get("/classes", function (req, res, next) {
  res.json(dummy);
});

module.exports = router;
