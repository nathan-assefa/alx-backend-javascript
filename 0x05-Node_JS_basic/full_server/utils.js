const { promisify } = require('util');
const { readFile } = require('fs');

const readDatabase = async (filePath) => {
  const readFilePromise = promisify(readFile);

  const data = await readFilePromise(filePath, 'utf-8');
  const lines = data.split('\n');
  const students = {};

  const noHeader = lines.slice(1);
  for (const line of noHeader) {
    if (line) {
      const [firstName, , , field] = line.split(',').map((value) => value.trim());

      if (field) {
        students[field] = students[field] || []; // Initialize an array if it doesn't exist
        students[field].push(firstName);
      }
    }
  }

  return students;
};

module.exports = readDatabase;
