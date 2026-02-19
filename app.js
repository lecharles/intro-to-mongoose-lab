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
};

// establish connection to MongoDB
connect();

// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);
