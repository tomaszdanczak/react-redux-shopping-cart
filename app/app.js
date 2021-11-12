const express = require("express");
const app = express();

// init database
require("./db/mongoose");

app.use(express.json());

// mount routes
app.use(require("./routes/web.js"));
app.use(require("./routes/api.js"));

module.exports = app;
