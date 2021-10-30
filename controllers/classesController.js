const db = require("../utils/database");
const crClass = require("../models/createClass");
class ClassesController {
  //get -> /classes
  index(req, res, next) {
    crClass
      .findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new ClassesController();
