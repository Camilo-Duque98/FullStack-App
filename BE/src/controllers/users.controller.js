const Users = require("../models/Users.js");

const getUsers = async (req, res) => {
  const AllUser = await Users.findAll({});
  res.send(AllUser);
};
const loginUser = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(body);
};

const createUser = async (req, res) => {
  try {
    const { email, password, typeId } = req.body;
    console.log(typeId);
    if (!email || !password || !typeId) {
      return res.status(400).json({ error: "content missing" });
    }
    const userCreate = await Users.create({
      email,
      password,
      typeId,
    });
    res.json(userCreate).status(200);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getUsers, loginUser, createUser };
