const express = require('express');
const cors = require('cors'); // ✅ Move this here
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('UserInfo Backend is Running');
});

// POST /login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const dataPath = path.join(__dirname, '../database/users.json');
  const usersData = JSON.parse(fs.readFileSync(dataPath));

  const user = usersData.users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    const { password, ...safeUser } = user;
    res.json({ status: 'success', user: safeUser });
  } else {
    res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});