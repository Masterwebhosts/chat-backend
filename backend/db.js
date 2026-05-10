const mysql = require("mysql2");

const db = mysql.createConnection({
   host: process.localhost,
  user: process.u622907918_yassin,
  password: process.S0>cQgKVbs,
  database: process.u622907918_chatappE
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Failed:", err.message);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;





 

