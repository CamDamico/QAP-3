var router = require("express").Router();

if (DEBUG) {
  console.log("ROUTE: /api/movies");
}

// http://localhost:3000/api/movies/
const moviesRouter = require("./movies");
router.use("/movies", moviesRouter);

module.exports = router;
