const express = require("express");
const router = express.Router();

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

// GET /movies
router.get("/", (req, res) => {
  res.status(200).json(db);
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
  const body = req.body;
  if (!body.title || !body.genre || !body.year) {
    return res.status(400).json({ error: "Invalid body" });
  }

  const newMovie = {
    id: db.length + 1,
    title: body.title,
    genre: body.genre,
    year: body.year,
  };
  db.push(newMovie);

  res.status(201).json(newMovie);
});

module.exports = router;
