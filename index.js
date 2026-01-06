const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  console.log("Request received at " + req.url);
  res.status(200).json({ message: "Hello, World!" });
});


app.get("/about", (req, res) => {
  console.log("Request received at " + req.url);
  res.status(200).json({ message: "About Us" });
});


app.get("/health", (req, res) => {
  console.log("Request received at " + req.url);
  res.status(200).json({ message: "Health Check" });
});

module.exports = app;