const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "drMthethwa@2022",
  host: "localhost",
  port: 5432,
  database: "employeemanagement",
});

module.exports = pool;