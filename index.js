const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  console.log("Request received at " + req.url);
  res.status(200).json({ message: "Hello, World!" });
});


app.get("/help",(req,res)=>{
  console.log("Help endpoint accessed at " + req.url);
  res.status(200).json({ message: "This is the help page" });
});

module.exports = app;