const Sequelize = require("sequelize");

const sequelize = new Sequelize("ayds", "ayds", "1234567890", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
