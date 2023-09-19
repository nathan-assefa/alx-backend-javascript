const fs = require('fs').promises;

function countStudents (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then((fileContents) => {
        // Split the file contents into lines and filter out empty lines
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

        // Log the total number of students
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field
        for (const field in fieldCounts) {
          if (field !== 'field') {
            const studentList = fieldCounts[field].students.join(', ');
            console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${studentList}`);
          }
        }

        // Resolve the Promise with the result
        resolve();
      })
      .catch((error) => {
        // Reject the Promise with an error message
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
