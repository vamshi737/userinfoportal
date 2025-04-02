const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Debug log before DB connect
console.log("🔍 Connecting to DB at host:", '172.31.90.85');

// ✅ MySQL connection
const db = mysql.createConnection({
  host: '172.31.90.85',       // DB EC2 Private IP
  port: 3306,
  user: 'root',
  password: 'Vamsi321',
  database: 'user_info',
  connectTimeout: 10000
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('UserInfo Backend is Running');
});

// ✅ Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`🔍 Checking credentials for: ${email}`);

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
      if (err) {
        console.log("❌ Database error:", err);
        return res.status(500).json({ status: 'fail', message: 'Database error' });
      }

      console.log("✅ MySQL connected and query executed.");
      if (result.length > 0) {
        const { password, ...safeUser } = result[0];
        res.json({ status: 'success', user: safeUser });
      } else {
        res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
      }
    }
  );
});

// ✅ Start server on all interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server started on http://0.0.0.0:${PORT}`);
});
