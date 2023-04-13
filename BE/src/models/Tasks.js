const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Task = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    taskType: {
      type: DataTypes.STRING,
    },
    observation: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Task;
