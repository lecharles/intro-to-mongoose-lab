console.log('Hello hello hello 1 2 3');

// test prompt-sync
const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);
