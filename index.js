const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  console.log("Request received at " + req.url);
  res.status(200).json({ message: "Hello, World!" });
});

module.exports = app;