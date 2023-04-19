const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

//cambiar identidades y atributos dependiendo del modelo diseñado
//por ustedes.
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
