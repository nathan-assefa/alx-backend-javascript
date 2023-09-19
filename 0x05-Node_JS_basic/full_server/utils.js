const { promisify } = require('util');
const { readFile } = require('fs');

const readDatabase = async (filePath) => {
  const readFilePromise = promisify(readFile);

  const data = await readFilePromise(filePath, 'utf-8');
  const lines = data.split('\n');
  const students = {};

  const noHeader = lines.slice(1);
  for (let i = 0; i < noHeader.length; i += 1) {
    if (noHeader[i]) {
      const field = noHeader[i].toString().split(',');
      if (Object.prototype.hasOwnProperty.call(students, field[3])) {
        students[field[3]].push(field[0]);
      } else {
        students[field[3]] = [field[0]];
      }
    }
  }

  return students;
};

module.exports = readDatabase;
