const express = require("express");

const router = express.Router();

const {
  getType,
  createType,
} = require("../controllers/userType.controller.js");

router.get("/type", getType);
router.post("/type", createType);

module.exports = router;
