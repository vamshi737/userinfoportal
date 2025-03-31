const express = require('express');
const cors = require('cors'); // ✅ Enables CORS
const mysql = require('mysql2'); // ✅ MySQL driver

const app = express();
const PORT = 3000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vamsi321',
  database: 'user_info',
});

// ✅ Root test route
app.get('/', (req, res) => {
  res.send('UserInfo Backend is Running');
});

// ✅ POST /login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // ✅ Log for Test 4: To confirm DB is working
  console.log(`🔍 Checking credentials for: ${email}`);

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
      if (err) {
        console.log("❌ Database error:", err); // Error log
        return res.status(500).json({ status: 'fail', message: 'Database error' });
      }

      // ✅ Success log
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

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
