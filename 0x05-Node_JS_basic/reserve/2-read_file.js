const fs = require('fs');

function countStudents (path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the CSV data into lines
    // using Boolean function we filter empty lines
    const lines = data.split('\n').filter(Boolean);

    // Initialize an object to store student counts by field
    const fieldCounts = {};

    // Iterate through the lines (skip the header line)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const [, , , field] = line.split(',');
        if (field) {
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
    }

    // Calculate the total number of students
    const totalStudents = Object.values(fieldCounts).reduce(
      (total, fieldCount) => total + fieldCount.count,
      0
    );

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their first names
    for (const field in fieldCounts) {
      const { count, students } = fieldCounts[field];
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database:', error.message);
  }
}

module.exports = countStudents;
