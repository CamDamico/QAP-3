var router = require("express").Router();
const actorsDal = require("../../services/pg.movies.dal");

// api/movies
router.get("/", async (req, res) => {
  if (DEBUG) console.log("ROUTE: /api/movies/ GET " + req.url);
  try {
    let theMovies = await moviesDal.getMovies();
    res.json(theMovies);
  } catch {
    // log this error to an error log file.
    res.statusCode = 503;
    res.json({ message: "Service Unavailable", status: 503 });
  }
});
// api/movies/:id
router.get("/:id", async (req, res) => {
  if (DEBUG) console.log("ROUTE: /api/movies/:id GET " + req.url);
  try {
    let aMovie = await moviesDal.getMovieByMovieId(req.params.id);
    if (aMovie.length === 0) {
      // log this error to an error log file.
      res.statusCode = 404;
      res.json({ message: "Not Found", status: 404 });
    } else res.json(aMovie);
  } catch {
    // log this error to an error log file.
    res.statusCode = 503;
    res.json({ message: "Service Unavailable", status: 503 });
  }
});
router.post("/", async (req, res) => {
  if (DEBUG) {
    console.log("ROUTE: /api/movies/ POST");
    //    console.log(req);
  }
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
    res.statusCode = 201;
    res.json({ message: "Created", status: 201 });
  } catch {
    // log this error to an error log file.
    res.statusCode = 503;
    res.json({ message: "Service Unavailable", status: 503 });
  }
});
router.put("/:id", async (req, res) => {
  if (DEBUG) console.log("ROUTE: /api/movies PUT " + req.params.id);
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
    res.statusCode = 200;
    res.json({ message: "OK", status: 200 });
  } catch {
    // log this error to an error log file.
    res.statusCode = 503;
    res.json({ message: "Service Unavailable", status: 503 });
  }
});
router.patch("/:id", async (req, res) => {
  if (DEBUG) console.log("ROUTE: /api/movies PATCH " + req.params.id);
  try {
    await actorsDal.patchMovie(
      req.body.title,
      req.body.description,
      req.body.release_year,
      req.body.rating,
      req.body.genre,
      req.body.main_actors,
      req.body.director
    );
    res.statusCode = 200;
    res.json({ message: "OK", status: 200 });
  } catch {
    // log this error to an error log file.
    res.statusCode = 503;
    res.json({ message: "Service Unavailable", status: 503 });
  }
});
router.delete("/:id", async (req, res) => {
  if (DEBUG) console.log("ROUTE: /api/movies DELETE " + req.params.id);
  try {
    await actorsDal.deleteMovie(req.params.movie_id);
    res.statusCode = 200;
    res.json({ message: "OK", status: 200 });
  } catch {
    // log this error to an error log file.
    res.statusCode = 503;
    res.json({ message: "Service Unavailable", status: 503 });
  }
});

module.exports = router;
