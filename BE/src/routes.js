const login = require("./routes/login.js");
const userType = require("./routes/userType.js");
const task = require("./routes/task.js");
module.exports = (app) => {
  app.use(login);
  app.use(userType);
  app.use(task);
};
