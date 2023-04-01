const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "qap_3-fullstack-db",
  password: "Keyin2023",
  port: 5432,
});
module.exports = pool;
