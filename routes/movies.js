const express = require("express");
const router = express.Router();
const moviesDal = require("../services/pg.movies.dal");

router.get("/", async (req, res) => {
  try {
    let theMovies = await moviesDal.getMovies();
    if (DEBUG) console.table(theMovies);
    res.render("movies", { theMovies });
  } catch {
    res.render("503");
  }
});

router.get("/:id", async (req, res) => {
  try {
    let aMovie = await moviesDal.getMovieByMovieId(req.params.id);
    if (aMovie.length === 0) res.render("norecord");
    else res.render("movie", { aMovie });
  } catch {
    res.render("503");
  }
});

router.get("/:id/replace", async (req, res) => {
  if (DEBUG) console.log("movie.Replace : " + req.params.id);
  res.render("moviePut.ejs", {
    title: req.query.title,
    description: req.query.description,
    release_year: req.params.release_year,
    rating: req.query.rating,
    genre: req.query.genre,
    main_actors: req.query.main_actors,
    director: req.query.director,
  });
});

router.get("/:id/edit", async (req, res) => {
  if (DEBUG) console.log("actor.Edit : " + req.params.id);
  res.render("actorPatch.ejs", {
    title: req.query.title,
    description: req.query.description,
    release_year: req.params.release_year,
    rating: req.query.rating,
    genre: req.query.genre,
    main_actors: req.query.main_actors,
    director: req.query.director,
  });
});

router.get("/:id/delete", async (req, res) => {
  if (DEBUG) console.log("movie.Delete : " + req.params.id);
  res.render("movieDelete.ejs", {
    title: req.query.title,
    description: req.query.description,
    release_year: req.params.release_year,
    rating: req.query.rating,
    genre: req.query.genre,
    main_actors: req.query.main_actors,
    director: req.query.director,
  });
});

router.post("/", async (req, res) => {
  if (DEBUG) console.log("movie.POST");
  try {
    await moviesDal.addMovie(
      req.body.title,
      req.body.description,
      req.body.release_year,
      req.body.rating,
      req.body.genre,
      req.body.main_actors,
      req.body.director
    );
    res.redirect("/movies/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

router.put("/:id", async (req, res) => {
  if (DEBUG) console.log("movie.PUT: " + req.params.id);
  try {
    await moviesDal.putMovie(
      req.body.title,
      req.body.description,
      req.body.release_year,
      req.body.rating,
      req.body.genre,
      req.body.main_actors,
      req.body.director
    );
    res.redirect("/movies/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});
router.patch("/:id", async (req, res) => {
  if (DEBUG) console.log("movies.PATCH: " + req.params.id);
  try {
    await moviesDal.patchMovie(
      req.body.title,
      req.body.description,
      req.body.release_year,
      req.body.rating,
      req.body.genre,
      req.body.main_actors,
      req.body.director
    );
    res.redirect("/movies/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});
router.delete("/:id", async (req, res) => {
  if (DEBUG) console.log("movies.DELETE: " + req.params.id);
  try {
    await moviesDal.deleteMovie(req.params.movie_id);
    res.redirect("/movies/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

module.exports = router;
