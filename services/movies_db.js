const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Movies",
  password: "Keyin2023",
  port: 5432,
});
module.exports = pool;
