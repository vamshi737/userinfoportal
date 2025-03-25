const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Root route (for test)
app.get('/', (req, res) => {
  res.send('UserInfo Backend is Running');
});

// POST /login API
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Read users.json file
  const dataPath = path.join(__dirname, '../database/users.json');
  const usersData = JSON.parse(fs.readFileSync(dataPath));

  // Find user
  const user = usersData.users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    // Remove password before sending response
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