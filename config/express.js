const express = require("express");
const CP = require("cookie-parser");
const cors = require("cors");


function expressConf(app, options) {
  
  app.use(cors({
    origin: options.origin,
    credentials: true
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(CP());
  console.log(options.origin)

  app.use(express.static("public"));
}

module.exports = expressConf;