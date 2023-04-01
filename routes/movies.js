const express = require("express");
const router = express.Router();
const moviesDal = require("../services/pg.movies.dal");

router.get("/", async (req, res) => {
  const theMovies = [
    {
      title: "Knives out",
      description:
        "The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but theres one thing that Detective Benoit Blanc knows for sure, everyone in the wildy dysfunctional Thrombey family is a suspect now.",
      release_year: "2019",
      rating: "PG-13",
      genre: "Mystery/Comedy",
      main_actors: "Ana de Armas, Daniel Craig, Chris Evans",
      director: "Rian Johnson",
    },
    {
      title: "The Departed",
      description:
        "South Boston cop Billy Costigan goes under cover to infiltrate the organization of gangland chief Frank Costello. As Billy gains the mobsters trust, a career criminal named Colin Sullivan infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each others identities to save their own lives.",
      release_year: "2006",
      rating: "18+",
      genre: "Crime/Thriller",
      main_actors:
        "Jack Nicholson, Leonardo DiCaprio, Matt Damon, Mark Wahlberg",
      director: "Martin Scorsese",
    },
  ];
  try {
    // let theMovies = await moviesDal.getMovies();
    if (DEBUG) console.table(theMovies);
    res.render("movies", { theMovies });
  } catch {
    res.render("503");
  }
});

router.get("/:id", async (req, res) => {
  const aMovie = [
    {
      title: "The Departed",
      description:
        "South Boston cop Billy Costigan goes under cover to infiltrate the organization of gangland chief Frank Costello. As Billy gains the mobsters trust, a career criminal named Colin Sullivan infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each others identities to save their own lives.",
      release_year: "2006",
      rating: "18+",
      genre: "Crime/Thriller",
      main_actors:
        "Jack Nicholson, Leonardo DiCaprio, Matt Damon, Mark Wahlberg",
      director: "Martin Scorsese",
    },
  ];
  try {
    // let aMovie = await moviesDal.getMovieByMovieId(req.params.id);
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
