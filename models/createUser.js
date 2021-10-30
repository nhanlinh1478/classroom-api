const sequelize = require("sequelize");
const db = require("../utils/database");
const crUser = db.define("user", {
  firstName: {
    type: sequelize.STRING,
  },
  lastName: {
    type: sequelize.STRING,
  },
  username: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
  },
});
module.exports = crUser;
