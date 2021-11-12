const express = require("express");
const app = express();

// init database
require("./db/mongoose");

// mount routes
app.use(require("./routes/api.js"));

module.exports = app;
