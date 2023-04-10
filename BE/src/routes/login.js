const express = require("express");
const { getUsers, loginUser } = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/", getUsers);

router.post("/login", loginUser);

module.exports = router;
