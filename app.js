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
            const name = prompt('Whats the customer name? ');
            const age = prompt('And customer age? ');
            const customer = await Customer.create({ name, age });
            console.log(`New Customer ${customer.name} created, is ${customer.age} years old. And in our records under ${customer._id} ID.`, customer);
            // ⬆️ want to see the full customer object so logging the whole thing too

        } else if (choice === '2') {
            // View all customers
            const customers = await Customer.find({}); // find all customers with no filters
            if (customers.length === 0) {
                console.log('No customers found.');
            } else {
                customers.forEach(customer => {
                    console.log(`Customer Name: ${customer.name}, Age: ${customer.age}, ID: ${customer._id}`);
                });
            }
        } else if (choice === '3') {
            // Update a customer
            const customersToUpdate = await Customer.find({});
            customersToUpdate.forEach((customer, index) => {
                // add a counter to the left of the customer name to make it easier for the user to select which customer to update
                console.log(`${index + 1}. Customer Name: ${customer.name}, Age: ${customer.age}, ID: ${customer._id}`);
            });
            const customerIndex = prompt('Enter the number of the customer you want to update: ');
            const newName = prompt('What is the customers new name? ');
            const newAge = prompt('What is the customers new age? ');
            const customerToUpdate = customersToUpdate[customerIndex - 1]; // -1 because the index starts at 0 but the user sees it starting at 1
            if (customerToUpdate) {
                customerToUpdate.name = newName;
                customerToUpdate.age = newAge;
                await customerToUpdate.save();
                console.log(`Customer updated! Name: ${customerToUpdate.name}, Age: ${customerToUpdate.age}, ID: ${customerToUpdate._id}`);
            } else {
                console.log('Invalid customer selection.');
            }
        } else if (choice === '4') {
            // Delete a customer
        } else if (choice === '5') { // stop the loop and exit the app
            running = false;
            console.log('Goodbye! And see you next time!');
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
