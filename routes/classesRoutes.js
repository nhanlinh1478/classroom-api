const express = require("express");
const router = express.Router();
const ClassesController = require("../controllers/classesController");
/* GET home page. */
router.get("/classsss", ClassesController.index);

module.exports = router;
