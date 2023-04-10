const express = require("express");
const Pool = require("pg");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send({ hola: "holadsd" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
