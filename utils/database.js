const Sequelize = require("sequelize");

module.exports = new Sequelize("classroom-api", "postgres", "01696271243", {
  host: "localhost",
  dialect: "postgres",
});
