const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.get("/goodbye", (req, res) => {
  res.send("Goodbye world");
});

app.listen(3000);
