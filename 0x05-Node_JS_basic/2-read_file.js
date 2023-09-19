const fs = require('fs');

function countStudents(fileName) {
  const studentCountsByField = {};
  const fieldCounts = {};
  let totalStudents = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    for (const line of lines) {
      if (line) {
        totalStudents++;

        const [, firstName, , field] = line.split(',');

        // Update student counts by field
        if (!studentCountsByField[field]) {
          studentCountsByField[field] = [];
        }
        studentCountsByField[field].push(firstName);

        // Update field counts
        if (!fieldCounts[field]) {
          fieldCounts[field] = 1;
        } else {
          fieldCounts[field]++;
        }
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      if (field !== 'field') {
        const studentList = studentCountsByField[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
