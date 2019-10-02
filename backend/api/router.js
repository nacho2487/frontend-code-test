const express = require("express");
const items = require("./items");
const itemById = require("./itemById");

const router = express.Router();

router.get("/items", items);
router.get("/items/:id", itemById);

module.exports = router;
