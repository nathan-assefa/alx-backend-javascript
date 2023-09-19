const http = require('http');
const fs = require('fs').promises;

async function countStudents (filePath) {
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const lines = fileContents.trim().split('\n');

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

  // Prepare the result string
  const resultString = [];
  resultString.push(`Number of students: ${totalStudents}`);

  // Add the number of students in each field to the result
  for (const field in fieldCounts) {
    if (field !== 'field') {
      const studentList = fieldCounts[field].students.join(', ');
      resultString.push(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${studentList}`);
    }
  }

  // Join the lines of the result string
  return resultString.join('\n');
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((result) => {
      response.end(result);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

const hostname = '127.0.0.1';
const port = 1245;

app.listen(port, hostname, () => {
});

// Export the app
module.exports = app;
