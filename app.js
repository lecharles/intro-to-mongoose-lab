console.log('Hello hello hello 1 2 3');

// test prompt-sync - get user input from cli
const prompt = require('prompt-sync')();
// connect to MongoDB and interact with db
const mongoose = require('mongoose');
// load env vars from .env file
const dotenv = require('dotenv');

// load environment variables from .env file
dotenv.config();

// import Customer model
const Customer = require('./models/customer');

// connect to MongoDB using hidden uri from .env file
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB MongoDB MongoDB');

    // welcome message
    const username = prompt('What is your name? ');
    console.log(`Welcome to the CRM, ${username}!`);

    let running = true; // var control for while until user quits

    while (running) { // while this is true...
        console.log('What would you like to do?');
        console.log('1. Create a new customer');
        console.log('2. View all customers');
        console.log('3. Update a customer');
        console.log('4. Delete a customer');
        console.log('5. Quit this app');
        
        const choice = prompt('Enter your choice: ');

        if (choice === '1') {
            // Create a new customer
        } else if (choice === '2') {
            // View all customers
        } else if (choice === '3') {
            // Update a customer
        } else if (choice === '4') {
            // Delete a customer
        } else if (choice === '5') { // stop the loop and exit the app
            running = false;
            console.log('Goodbye!');
        } else {
            console.log('Invalid choice, please try again.'); // otherwise it's something else that's not a valid option
        }
    }

    console.log('Quitting CRM application...');
    await mongoose.connection.close();

};

// establish connection to MongoDB
connect();

// console.log(`Your name is ${username}`);
