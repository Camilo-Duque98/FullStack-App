const getUsers = (req, res) => {
  res.send("Hola mundo asd");
};
const loginUser = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(body);
};

const createUser = (req, res) => {
  const body = req.body;
  res.json(body);
};
module.exports = { getUsers, loginUser };
