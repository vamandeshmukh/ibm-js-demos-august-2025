console.log("mysql.js");

import mysql from "mysql2/promise";
import config from "./envConfig.js";

const pool = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

pool.getConnection()
  .then(() => {
    console.log("Connected to MySQL:", config.mysql.database);
  })
  .catch((err) => {
    console.error("MySQL connection error:", err.message);
  });

export default pool;
