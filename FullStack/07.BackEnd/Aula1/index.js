const express = require("express");
const app = express();
const { logger } = require("./middleware/log");
const movies = require("./movies");

app.use(express.json());

app.use(logger);

app.use("/movies", movies);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal error" });
});

app.listen(3000, () => {
  console.log("Engine Started...");
});
