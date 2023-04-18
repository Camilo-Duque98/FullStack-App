// const { response } = require("express");
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./routes")(app);

module.exports = app;
