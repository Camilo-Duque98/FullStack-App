const login = require("./routes/login.js");
const userType = require("./routes/userType.js");
module.exports = (app) => {
  app.use(login);
  app.use(userType);
};
