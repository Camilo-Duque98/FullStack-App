const express = require("express");
const { getUsers, loginUser , createUser} = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/", getUsers);

router.post("/login", loginUser);
router.post("/createUser",createUser)

module.exports = router;
