const UserType = require("../models/UsersType.js");

const createType = async (req, res) => {
  const { nameCategory } = req.body;

  if (!nameCategory) {
    res.status(400);
    return;
  }
  const userType = await UserType.create({
    nameCategory,
  });
  res.json(userType).status(200);
};

const getType = async (req, res) => {
  const categories = UserType.findAll();
  res.json(categories);
};

module.exports = { createType, getType };
