const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./Users.js");

const UserType = sequelize.define(
  "UsersType",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameCategory: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

UserType.hasMany(User, {
  foreignKey: "typeId",
  sourceKey: "id",
});

User.belongsTo(UserType, {
  foreignKey: "typeId",
  targetId: "id",
});

module.exports = UserType;
