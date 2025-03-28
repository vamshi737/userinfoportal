const express = require('express');
const cors = require('cors'); // ✅ Move this here
const mysql = require('mysql2'); // ✅ Import mysql2

const app = express();
const PORT = 3000;

// ✅ Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vamsi321', // Replace with your MySQL root password
  database: 'user_info', // Make sure this is the correct database name
});

// Root route
app.get('/', (req, res) => {
  res.send('UserInfo Backend is Running');
});

// POST /login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query the database for the user credentials
  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
      if (err) {
        return res.status(500).json({ status: 'fail', message: 'Database error' });
      }
      if (result.length > 0) {
        const { password, ...safeUser } = result[0]; // Omit password
        res.json({ status: 'success', user: safeUser });
      } else {
        res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
      }
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
