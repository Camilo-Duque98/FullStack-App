const { response } = require("express");
const express = require("express");
const appRouter = require("./routes.js");
const app = express();

app.use(express.json());

require("./routes")(app);

// app.get("/", (req, res) => {
//   res.send({ hola: "hola" });
// });

//const PORT = 3001;

module.exports = app;
