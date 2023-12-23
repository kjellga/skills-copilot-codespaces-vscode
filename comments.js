// Create web server
// 1. Create web server
// 2. Create a route
// 3. Create a handler
// 4. Register the route
// 5. Start the server

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 3. Create a handler
app.get('/api/comments', (req, res) => {
  // 4. Register the route
  res.send(comments);
});

// 5. Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Data
const comments = [
  { id: 1, text: 'Comment 1' },
  { id: 2, text: 'Comment 2' },
  { id: 3, text: 'Comment 3' },
];