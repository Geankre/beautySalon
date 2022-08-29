const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.MYSQL_host,
  user: process.env.MYSQL_user,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})


module.exports = connection


