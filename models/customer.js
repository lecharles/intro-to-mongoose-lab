const mongoose = require('mongoose');

// scema of a customer record in MongoDB
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// create model from schema
const Customer = mongoose.model('Customer', customerSchema);

// make model available to other files in the project like in app.js
module.exports = Customer;