const express = require("express");
const { save } = require("../controller/user.controller");
const router = express.Router();
const userSchema = require("../models/user.model");

router.get("/", (req, res) => {
  console.log("inside user get");
});

router.post("/", save);


module.exports = router;
