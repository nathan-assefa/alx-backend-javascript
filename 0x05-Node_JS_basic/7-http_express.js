const express = require('express');
const fs = require('fs').promises;

const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' endpoint
app.get('/students', async (req, res) => {
  try {
    const databaseFilePath = process.argv[2];
    const data = await countStudents(databaseFilePath);

    // Send the data as plain text response
    res.set('Content-Type', 'text/plain');
    res.send(data.slice(0, -1));
  } catch (error) {
    // Handle errors
    res.status(404).send('Cannot load the database');
  }
});

// Function to count students from the database file
async function countStudents (filePath) {
  try {
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const lines = fileContents.split('\n').filter(Boolean);

    // Initialize data structures to store counts and student names
    const fieldCounts = {};
    let totalStudents = 0;

    // Process each line of the file
    for (const line of lines.slice(1)) {
      const [, , , field] = line.split(',');
      if (field) {
        totalStudents++;

        if (fieldCounts[field]) {
          fieldCounts[field].count++;
          fieldCounts[field].students.push(line.split(',')[0]);
        } else {
          fieldCounts[field] = {
            count: 1,
            students: [line.split(',')[0]]
          };
        }
      }
    }

    // Create the response string
    let responseString = `Number of students: ${totalStudents}\n`;

    for (const field in fieldCounts) {
      if (field !== 'field') {
        const studentList = fieldCounts[field].students.join(', ');
        responseString += `Number of students in ${field}: ${fieldCounts[field].count}. List: ${studentList}\n`;
      }
    }

    return responseString;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
});

// Export the Express app
module.exports = app;
