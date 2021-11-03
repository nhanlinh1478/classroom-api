const Sequelize = require("sequelize");
const db = require("../utils/database");
const crClass = db.define("classes", {
  className: {
    type: Sequelize.STRING,
  },
  section: {
    type: Sequelize.STRING,
  },
  subject: {
    type: Sequelize.STRING,
  },
  room: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
});
module.exports = crClass;
