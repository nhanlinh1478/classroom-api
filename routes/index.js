const express = require("express");
const router = express.Router();
const classesRoute = require("../routes/classesRoutes");
const ListClassesController = require("../controllers/classesController");
const ClassController = require("../controllers/addClassController");
/* GET home page. */
function Route(app) {
  app.get("/", ListClassesController.index);
  app.post("/classes/addClass", ClassController.addClass);
}
module.exports = Route;
