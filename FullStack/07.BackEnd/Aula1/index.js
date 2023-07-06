const express = require("express");
const app = express();
const { logger } = require("./middleware/log");

const db = [
  {
    id: 1,
    title: "Movie 1",
    genre: "Action",
    year: 1999,
  },
  {
    id: 2,
    title: "Movie 2",
    genre: "Comedy",
    year: 2010,
  },
  {
    id: 3,
    title: "Movie 3",
    genre: "Drama",
    year: 2010,
  },
];

app.use(logger);

// GET /movies
app.get("/movies", (req, res) => {
  res.status(200).json(db);
});

app.get("/movies/:id", (req, res) => {
  // get ID from request
  // fetch record from DB
  // return JSOn
  const id = parseInt(req.params.id);
  const movie = db.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.status(200).json(movie);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal error" });
});

app.listen(3000, () => {
  console.log("Engine Started...");
});
