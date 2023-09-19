// Import the 'readline' module for handling user input
const readline = require('readline');

// Create an interface for reading user input from the command line
const rl = readline.createInterface({
  input: process.stdin, // Read input from standard input (the command line)
  output: process.stdout // Display output to standard output (the command line)
});

// Display a welcome message
console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Display a closing message
  console.log('This important software is now closing');
  
  // Close the input stream and exit the program
  rl.close();
});
