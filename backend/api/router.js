const express = require("express");
const items = require("./items");

const router = express.Router();

router.get("/items", items);

module.exports = router;
