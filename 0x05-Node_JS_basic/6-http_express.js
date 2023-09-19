const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
});

// Export the Express app
module.exports = app;
