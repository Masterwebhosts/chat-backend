const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // ضع كلمة مرورك إذا موجودة
  database: "chat_app"
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;