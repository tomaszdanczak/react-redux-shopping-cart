const express = require("express");
const app = express();

// init database
require("./db/mongoose");

module.exports = app;
