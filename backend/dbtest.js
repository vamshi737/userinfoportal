const mysql = require('mysql2');

console.log("🔍 Trying direct DB connection to 172.31.90.85");

const connection = mysql.createConnection({
  host: '172.31.90.85',
  port: 3306,
  user: 'root',
  password: 'Vamsi321',
  database: 'user_info'
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL!");
  }
  connection.end();
});
