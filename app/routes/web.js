const express = require("express");
const router = new express.Router();
const path = require("path");

const buildPath = path.join(__dirname, "../../build");
router.use("/", express.static(buildPath));

const indexPath = path.join(__dirname, "../../build/index.html");
router.get("/", (req, res) => res.sendFile(indexPath));

module.exports = router;
