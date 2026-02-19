# Terminal CRM

A terminal-based CRM app built with Node.js, MongoDB, and Mongoose.

## Features
- Create, view, update, and delete customers
- Data persists in a local MongoDB database
- Numbered menu for easy navigation

## Setup
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with `MONGODB_URI=mongodb://localhost:27017/crm`
4. Make sure MongoDB is running (`brew services start mongodb-community`)
5. Run `node app.js`

## Verifying Data
You can check the database directly using `mongosh`:
```
mongosh
use crm
db.customers.find()
```

## Technologies
- Node.js
- MongoDB / Mongoose
- prompt-sync
- dotenv