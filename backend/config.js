const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "drMthethwa2023#",
  host: "localhost",
  port: 5432,
  database: "siyacodamaindb",
});

module.exports = pool;
