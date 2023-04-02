const dal = require("./movies_db");

//get all movies.
var getMovies = function () {
  if (DEBUG) console.log("movies.pg.dal.getMovies()");
  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT movie_id AS _id, title, description, release_year, rating, genre, main_actors, director FROM Movies ORDER BY movie_id;";
    dal.query(sql, [], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

var getMovieByMovieId = function (movie_id) {
  if (DEBUG) console.log("movies.pg.dal.getMovieByMovieId()");
  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT movie_id AS _id, title, description, release_year, rating, genre, main_actors, director FROM Movies WHERE movie_id = $1;";
    dal.query(sql, [movie_id], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

var addMovie = function (
  title,
  description,
  release_year,
  rating,
  genre,
  main_actors,
  director
) {
  if (DEBUG) console.log("movies.pg.dal.addMovie()");
  return new Promise(function (resolve, reject) {
    const sql =
      "INSERT INTO Movies(title, description, release_year, rating, genre, main_actors, director) \
        VALUES ($1, $2, $3, $4, $5, $6, $7);";
    dal.query(
      sql,
      [title, description, release_year, rating, genre, main_actors, director],
      (err, result) => {
        if (err) {
          if (DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};
var putMovie = function (id, title) {
  if (DEBUG) console.log("movies.pg.dal.putMovie()");
  return new Promise(function (resolve, reject) {
    const sql = "UPDATE Movies SET title=$2 WHERE movie_id=$1;";
    dal.query(sql, [movie_id, title], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
var patchMovie = function (movie_id, title) {
  if (DEBUG) console.log("movies.pg.dal.patchMovie()");
  return new Promise(function (resolve, reject) {
    const sql = "UPDATE Movies SET title=$2  WHERE movie_id=$1;";
    dal.query(sql, [movie_id, title], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
var deleteMovie = function (id) {
  if (DEBUG) console.log("movies.pg.dal.deleteMovie()");
  return new Promise(function (resolve, reject) {
    const sql = "DELETE FROM Movies WHERE movie_id = $1;";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  getMovies,
  getMovieByMovieId,
  addMovie,
  putMovie,
  patchMovie,
  deleteMovie,
};
