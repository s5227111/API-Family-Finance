const express = require("express");
const app = express();

// Initial user's route
const routes = require("./routes");
routes(app);

module.exports = app;
